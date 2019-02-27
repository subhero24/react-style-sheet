const calculate = selector => {
	let spec = [0, 0, 0];
	for (let node of selector) {
		if (node.type === 'tag') {
			spec[2]++;
		} else if (node.type === 'attribute') {
			if (node.name === 'id') {
				spec[0]++;
			} else {
				spec[1]++;
			}
		} else if (node.type === 'pseudo') {
			spec[1]++;
		}
	}
	return spec;
};

const compare = (spec1, spec2) => {
	let index = 0;
	while (index < spec1.length && index < spec2.length) {
		let s1 = spec1[index];
		let s2 = spec2[index];
		if (s1 == undefined && s2 == undefined) {
			return 0;
		} else {
			if (s1 == undefined) s1 = 0;
			if (s2 == undefined) s2 = 0;
			if (s1 > s2) return 1;
			if (s1 < s2) return -1;
		}
		index++;
	}
	return 0;
};

export { calculate, compare };
