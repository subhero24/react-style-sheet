import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    #id {
        color: blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>black</div>
			<div id="id">blue</div>
		</Stylesheet>
	);
};
