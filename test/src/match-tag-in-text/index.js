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
			This <span>span</span> inside div should be blue
		</Stylesheet>
	);
};
