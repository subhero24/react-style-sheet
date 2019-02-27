import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    .class {
        color: blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>black</div>
			<div className="class">blue</div>
			<div className="one of class">blue</div>
		</Stylesheet>
	);
};
