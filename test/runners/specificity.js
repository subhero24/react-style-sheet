import Buckler from 'buckler';
import parseSelector from 'css-what';
import specificity, { compare } from '../../src/specificity';

const snapshot = Buckler({ dir: 'specificity' });

snapshot('universal.json', () => {
	return specificity(parseSelector('*')[0]);
});

snapshot('tag.json', () => {
	return specificity(parseSelector('div')[0]);
});

snapshot('tags.json', () => {
	return specificity(parseSelector('div span')[0]);
});

snapshot('class.json', () => {
	return specificity(parseSelector('.foo')[0]);
});

snapshot('classes.json', () => {
	return specificity(parseSelector('.foo.bar')[0]);
});

snapshot('attribute.json', () => {
	return specificity(parseSelector('[type=checkbox]')[0]);
});

snapshot('pseudo-class.json', () => {
	return specificity(parseSelector(':nth-child(3)')[0]);
});

snapshot('id.json', () => {
	return specificity(parseSelector('#foo')[0]);
});

snapshot('sibling.json', () => {
	return specificity(parseSelector('li:nth-of-type(3n) ~ li')[0]);
});

snapshot('not.json', () => {
	return specificity(parseSelector('input[type]:not(.foo)')[0]);
});

snapshot('compare.json', () => {
	return compare(specificity(parseSelector('div')[0]), specificity(parseSelector('#foo')[0]));
});
