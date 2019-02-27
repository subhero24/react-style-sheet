import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    div {
		color: green;
        background-color: hotpink;
    }
`;

export default props => {
	return (
		<Stylesheet>
			<div style={{ color: 'blue' }}>div</div>
		</Stylesheet>
	);
};
