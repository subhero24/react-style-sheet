import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    div.foo {
        color: blue;
    }

    div {
        color: red;
    }
`;

export default props => {
	return (
		<Stylesheet>
			<div className="foo">div</div>
		</Stylesheet>
	);
};
