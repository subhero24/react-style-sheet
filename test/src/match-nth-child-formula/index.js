import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    :nth-child(3n+2) {
        color: blue;
    }
`;

export default props => {
	return (
		<Stylesheet>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
			<span>span</span>
		</Stylesheet>
	);
};
