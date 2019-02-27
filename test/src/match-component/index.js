import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    Component {
        color: blue;
    }
`;

const Component = props => {
	return <div>{JSON.stringify(props)}</div>;
};

export default props => {
	return (
		<Stylesheet>
			<Component />
		</Stylesheet>
	);
};
