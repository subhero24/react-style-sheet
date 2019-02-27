import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    [data-attr1] {
        color: blue;
	}

	[data-attr2=foo] {
		color: green;
	}

	[data-attr3$=foo] {
		color: red;
	}

	[data-attr4$=foo] {
		color: yellow;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>black</div>
			<div data-attr1={true}>blue</div>
			<div data-attr1={false}>black</div>
			<div data-attr2="foo">green</div>
			<div data-attr2="bar">black</div>
			<div data-attr3="barfoo">red</div>
			<div data-attr3="foobar">black</div>
			<div data-attr4="barfoo">yellow</div>
			<div data-attr4="foobar">black</div>
		</Stylesheet>
	);
};
