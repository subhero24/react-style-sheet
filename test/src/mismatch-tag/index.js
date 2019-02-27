import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    span {
		color: blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>This div should not be colorized</div>
		</Stylesheet>
	);
};
