import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    > div.aClass {
        color: blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<span className="aClass">black</span>
		</Stylesheet>
	);
};
