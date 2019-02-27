//@ts-check

import React from 'react';
import isBrowser from './utils/is-browser';
import camelCase from 'camelcase-css';
import matchCSSFormula from './utils/match-css-formula';
import isDescendantNode from './utils/is-descendant-node';
import isDirectDescendantNode from './utils/is-direct-descendant-node';

import addBrowserStyles from './utils/add-browser-styles';

export default function(stylesheet) {
	if (isBrowser) {
		addBrowserStyles(stylesheet);
	} else {
		if (stylesheet.keyframes.length > 0) throw new Error(`'@keyframes' rules are only supported in the browser`);
	}

	// Convert all styles to React camelCasedStyle objects
	for (let rule of stylesheet.rules) {
		let style = {};
		for (let prop in rule.style) {
			style[camelCase(prop)] = rule.style[prop];
		}
		rule.style = style;
	}

	let matchChild = (children, childIndex, selector) => {
		let child = children[childIndex];

		// if (child == undefined) debugger;
		for (let selectorIndex = selector.length - 1; selectorIndex >= 0; --selectorIndex) {
			let selectorNode = selector[selectorIndex];
			if (selectorNode.type === 'tag') {
				if (typeof child.type === 'string') {
					if (child.type !== selectorNode.name) return false;
				} else {
					if (process.env.NODE_ENV !== 'production') {
						if (child.type.name === selectorNode.name) {
							if (child.type.displayName !== child.type.name) {
								console.warn(
									`If your variable names get mangled by minification (eg. production build), the selector to match '${
										selectorNode.name
									}' will no longer work. \nSet the displayName property of ${
										selectorNode.name
									} to '${selectorNode.name}' if your production build does mangle variable names.`,
								);
							}
						}
					}
					if (child.type.displayName == undefined) {
						if (child.type.name !== selectorNode.name) return false;
					} else {
						if (child.type.displayName !== selectorNode.name) return false;
					}
				}
			} else if (selectorNode.type === 'attribute') {
				let { action, name, value } = selectorNode;

				if (action === 'exists') {
					return child.props[name];
				} else if (action === 'element') {
					if (name === 'class') name = 'className';
					if (child.props[name] == undefined) return false;
					let classNames = child.props[name].toString().split(' ');
					if (classNames.indexOf(value) === -1) return false;
				} else if (action === 'equals') {
					if (child.props[name] == undefined) return false;
					if (child.props[name] !== value) return false;
				} else if (action === 'start') {
					if (child.props[name] == undefined) return false;
					if (child.props[name].toString().startsWith(value) === false) return false;
				} else if (action === 'end') {
					if (child.props[name] == undefined) return false;
					if (child.props[name].toString().endsWith(value) === false) return false;
				}
			} else if (selectorNode.type === 'pseudo') {
				if (selectorNode.name === 'first-child') {
					if (childIndex !== 0) return false;
				} else if (selectorNode.name === 'last-child') {
					if (childIndex !== children.length - 1) return false;
				} else if (selectorNode.name === 'nth-child') {
					if (selectorNode.data === 'even') {
						if (childIndex % 2 !== 1) return false;
					} else if (selectorNode.data === 'odd') {
						if (childIndex % 2 !== 0) return false;
					} else {
						return matchCSSFormula(childIndex, selectorNode.data);
					}
				}
			} else if (selectorNode.type === 'adjacent') {
				if (childIndex === 0) return false;

				let elements = children;
				elements = elements.slice(0, childIndex);
				elements = elements.reverse();

				let elementIndex = elements.findIndex(React.isValidElement);
				if (elementIndex === -1) {
					return false;
				} else {
					let subselector = selector.slice(0, selectorIndex);
					return matchChild(children, childIndex - elementIndex - 1, subselector);
				}
			} else if (selectorNode.type === 'sibling') {
				let subselector = selector.slice(0, selectorIndex);
				for (let siblingIndex = 0; siblingIndex < childIndex; ++siblingIndex) {
					let sibling = children[siblingIndex];
					if (React.isValidElement(sibling)) {
						if (matchChild(children, siblingIndex, subselector)) {
							return true;
						}
					}
				}
				return false;
			} else if (isDescendantNode(selectorNode)) {
				return true;
			}
		}
		return true;
	};

	let transformChildren = (children, rules) => {
		if (rules.length === 0) return children;
		if (children == undefined) return children;
		if (typeof children === 'function') return children;

		let childrenArray = React.Children.toArray(children);
		return childrenArray.map((child, childIndex) => {
			if (typeof child === 'string') return child;
			if (!React.isValidElement(child)) return child;
			if (child.type === React.Fragment) return transformChildren(child.props.children, rules);

			let extraStyle = {};
			let extraClasses = [];
			let substylesheet = [];

			for (let rule of rules) {
				let node;
				let index;
				let keepRule = true;
				let selector = rule.selector;
				let subselector;

				index = selector.findIndex(isDescendantNode);
				if (index === 0) {
					[node, ...selector] = selector;

					if (isDirectDescendantNode(node)) {
						keepRule = false;
					}

					index = selector.findIndex(isDescendantNode);
				}

				if (index !== -1) {
					subselector = selector.slice(index);
					selector = selector.slice(0, index);
				}

				let match = matchChild(childrenArray, childIndex, selector);
				if (match) {
					if (subselector == undefined) {
						if (isBrowser && typeof child.type === 'string') {
							extraClasses.push(rule.class);
						} else {
							Object.assign(extraStyle, rule.style);
						}
					} else {
						substylesheet.push({ ...rule, selector: subselector });
					}
				}

				if (keepRule) {
					substylesheet.push(rule);
				}
			}

			let childProps = { ...child.props };
			let hasExtraClasses = extraClasses.length > 0;
			if (hasExtraClasses) {
				let classNames = extraClasses.join(' ');
				if (childProps.className == undefined || childProps.className == '') {
					childProps.className = classNames;
				} else {
					childProps.className = childProps.className + ' ' + classNames;
				}
			}

			let hasExtraStyle = Object.keys(extraStyle).length > 0;
			if (hasExtraStyle) {
				if (childProps.style) {
					childProps.style = { ...extraStyle, ...childProps.style };
				} else {
					childProps.style = extraStyle;
				}
			}

			childProps.children = transformChildren(childProps.children, substylesheet);

			return React.cloneElement(child, childProps);
		});
	};

	return props => {
		return transformChildren(props.children, stylesheet.rules);
	};
}
