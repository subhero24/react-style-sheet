import stylis from 'stylis';
import stylisAST from 'stylis-ast';
import parseSelector from 'css-what';

import stylesheet from './stylesheet';
import { calculate, compare } from './specificity';

let parser;
parser = new stylis();
parser.use(stylisAST);

export default function(strings, ...interpolations) {
	let rules = [];
	let keyframes = [];

	let string = interpolations.reduce((acc, value, index) => {
		return `${acc}${value}${strings[index + 1]}`;
	}, strings[0]);

	let nodes = parser('', string);

	for (let node of nodes) {
		if (node.type === 'rule') {
			let style = {};
			for (let declaration of node.children.reverse()) {
				style[declaration.name] = declaration.value;
			}

			let validStyle = Object.keys(style).length > 0;
			if (validStyle) {
				try {
					let selectors = parseSelector(node.rule, { xmlMode: true });
					for (let selector of selectors) {
						rules.push({ style, selector });
					}
				} catch (e) {
					throw new Error(`Error parsing selector ${node.rule}`);
				}
			}
		} else if (node.type === '@at-rule') {
			let [type, ...other] = node.rule.split(/\s+/);
			if (type === '@keyframes') {
				let [name] = other;
				let keyframe = { name, steps: [] };
				for (let subnode of node.children) {
					let step = { rule: subnode.rule, style: {} };
					for (let declaration of subnode.children.reverse()) {
						step.style[declaration.name] = declaration.value;
					}
					keyframe.steps.push(step);
				}
				keyframes.push(keyframe);
			}
		}
	}

	rules.sort((a, b) => compare(calculate(a.selector), calculate(b.selector)));

	return stylesheet({ rules, keyframes });
}
