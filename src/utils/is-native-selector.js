export default selector => {
	for (let index = selector.length - 1; index >= 0; --index) {
		let node = selector[index];
		if (node.type === 'tag' && node.name.charCodeAt(0) < 97) {
			return false;
		} else if (['child', 'sibling', 'adjacent', 'descendant'].includes(node.type)) {
			return true;
		}
	}
	return true;
};
