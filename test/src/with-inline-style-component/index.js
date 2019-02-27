import React from 'react';
import Style from 'react-style-sheet';

const Stylesheet = Style`
    Component {
		color: green;
        background-color: hotpink;
    }
`;

const Component = props => {
	return <div {...props}>{JSON.stringify(props)}</div>;
};

export default props => {
	return (
		<Stylesheet>
			<Component style={{ color: 'blue' }}>div</Component>
		</Stylesheet>
	);
};
