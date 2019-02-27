// This function checks if index n matches the css formula (an + b)
export default function(index, formula) {
	let [, group, sign = '+', a, b = '0'] = formula.match(/^(([-+])?(\d+)?n)?\+?(\d+)?$/);

	if (a == null) {
		a = group == null ? 0 : 1;
	} else {
		a = parseInt(a, 10);
	}

	if (b == null) {
		b = 0;
	} else {
		b = parseInt(b, 10);
	}

	// CSS formula uses 1-indexed numbers
	++index;

	// Calculate match
	if (index === b) return true;
	if (a === 0) return false;
	if (sign === '+' && index < b) return false;
	if (sign === '-' && index > b) return false;
	return (b - index) % a === 0;
}
