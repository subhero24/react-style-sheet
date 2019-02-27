import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    :first-child {
        color: blue;
    }

    :last-child {
        color: lightskyblue;
    }
`;

export default props => {
	return (
		<Stylesheet>
			<div>first-child</div>
			<div>middle-child 1</div>
			<div>middle-child 2</div>
			<div>last-child</div>
		</Stylesheet>
	);
};
