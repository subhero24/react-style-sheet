import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    div:hover {
        color: blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>black</div>
		</Stylesheet>
	);
};
