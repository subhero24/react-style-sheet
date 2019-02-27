import Buckler from 'buckler';
import parseSelector from 'css-what';
import isNativeSelector from '../../src/utils/is-native-selector';

const snapshot = Buckler({ dir: 'is-native-selector' });

snapshot('universal.json', () => {
	return isNativeSelector(parseSelector('div', { xmlMode: true })[0]);
});

snapshot('native-tag.json', () => {
	return isNativeSelector(parseSelector('*', { xmlMode: true })[0]);
});

snapshot('non-native-tag.json', () => {
	return isNativeSelector(parseSelector('Button', { xmlMode: true })[0]);
});

// snapshot(test => {
// 	test.description = 'woot'
// 	test.type = 'application.json'
// 	test.file = 'test/index.json'

// 	return 4 + 4
// })

snapshot('test/index.json', test => {
	test.description = 'woot';
	test.type = 'application.json';

	return 4 + 4;
});

// snapshot(test => {
// 	test.describe('woot')
// 	test.type('application/json')
// 	test.file('test/index.json')
// 	test.run(() => {
// 		return 4 + 4
// 	})
// })

// snapshot(test => {
// 	test.describe('woot')
// 	test.type('application/json')
// 	test.file('test/index.json')

// 	return () => {
// 		4 + 4
// 	}
// })

// snapshot(test => {
// 	test.describe('woot')
// 	test.type('application/json')
// 	test.file('test/index.json')
// 	test.run(() => {
// 		return 4 + 4
// 	})
// })

// snapshot(() => {
// 	return {
// 		description: 'woot',
// 		file: 'test/index.json',
// 		type: 'application/json',
// 		run: () => {
// 			return 4 + 4
// 		}
// 	}
// })
