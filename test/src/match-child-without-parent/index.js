import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    > div {
        outline: 1px solid blue;
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>
				blue border
				<div>non blue border</div>
			</div>
		</Stylesheet>
	);
};
