import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    div {
        color: red;
    }
    
    div.foo {
        color: blue;
    }
`;

export default props => {
	return (
		<Stylesheet>
			<div className="foo">div</div>
		</Stylesheet>
	);
};
