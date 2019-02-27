export default node => {
	return node.type === 'descendant' || node.type === 'child';
};
