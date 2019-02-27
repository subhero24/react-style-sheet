import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    div {
		color: blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>This div should be colorized</div>
		</Stylesheet>
	);
};
