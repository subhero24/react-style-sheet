import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet1 = Style`
    > div > span {
        color: blue;
    }
`;

const Stylesheet2 = Style`
    > div > span {
        color: red;
    }
`;

export default props => {
	return (
		<React.Fragment>
			<Stylesheet1>
				<div>
					<span>div &gt; span</span>
				</div>
			</Stylesheet1>
			<Stylesheet2>
				<div>
					<span>div &gt; span</span>
				</div>
			</Stylesheet2>
		</React.Fragment>
	);
};
