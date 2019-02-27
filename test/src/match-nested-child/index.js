import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    div {
        span {
            color: blue;
        }
	}
`;

export default props => {
	return (
		<Stylesheet>
			<div>
				<span>Should be blue</span>
			</div>
		</Stylesheet>
	);
};
