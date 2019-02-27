import isNativeSelector from './is-native-selector';

const Global = 'ReactStylesheet';

export default stylesheet => {
	if (window[Global] == undefined) {
		window[Global] = {
			classIndex: 0,
			keyframeIndex: 0,
		};
	}

	let { rules, keyframes } = stylesheet;

	let keyframemap = {};
	let keyframestring = '';
	if (keyframes != undefined && keyframes.length > 0) {
		for (let keyframe of keyframes) {
			let scopedKeyframeName = `rsskeyframe${window[Global].keyframeIndex++}`;

			keyframemap[keyframe.name] = scopedKeyframeName;
			keyframe.name = scopedKeyframeName;

			let stepstring = '';
			let { name, steps } = keyframe;
			for (let step of steps) {
				let { rule, style } = step;

				let stylestring = '';
				for (let prop in style) {
					stylestring += `${prop}:${style[prop]};`;
				}

				stepstring += `${rule}{${stylestring}}`;
			}

			keyframestring += `@keyframes ${name}{${stepstring}}`;
		}
	}

	// Replace all keyframe names to be locally scoped
	let replacements = {};
	replacements['animation'] = value => value.replace(/^([^\s]*)/, name => keyframemap[name]);
	replacements['animation-name'] = value => keyframemap[value];
	for (let rule of rules) {
		let { style } = rule;
		for (let property in replacements) {
			let replacement = replacements[property];
			if (style[property]) {
				style[property] = replacement(style[property]);
			}
		}
	}

	let rulestring = '';
	if (rules != undefined && rules.length > 0) {
		for (let rule of rules) {
			let { style, selector } = rule;
			if (isNativeSelector(selector)) {
				rule.class = `rssclass${window[Global].classIndex++}`;

				let stylestring = '';
				for (let prop in style) {
					stylestring += `${prop}:${style[prop]};`;
				}

				rulestring += `.${rule.class}{${stylestring}}`;
			}
		}
	}

	if (keyframestring || rulestring) {
		let styleElement;
		styleElement = document.createElement('style');
		styleElement.type = 'text/css';
		styleElement.innerText = `${keyframestring} ${rulestring}`;

		document.head.appendChild(styleElement);
	}
};
