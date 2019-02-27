# React-style-sheet

React style sheet is a react library for styling your components.
You create a stylesheet component by specifiying the css,
and the stylesheet renders its children with the appropriate styles.

## Install

```
yarn add react-style-sheet
```

## Basic Usage

```javascript
import Style from 'react-style-sheet';

const Stylesheet = Style`
	button {
		color: lightskyblue;
	}
`;
```

Creates a Stylesheet component for you to use inside a render.

```javascript
const Component = props => {
	return (
		<Stylesheet>
			<button>Push me</button>
		</Stylesheet>
	);
};
```

The Stylesheet component renders it children with the appropriate styles.
In this case, the button would have a lightskyblue color.
This would effectively be the same as if the component rendered

```javascript
<button style={{ color: 'lightskyblue' }}>Push me</button>
```

### Target your own components

You can also target your own components in the stylesheet.

```javascript
const Stylesheet = Style`
	MyFancyButton {
		color: lightskyblue;
	}
`;

<Stylesheet>
	<MyFancyButton>Push me</MyFancyButton>
</Stylesheet>;
```

## More useful stylesheets

React-style-sheet supports ids, classes, nested selectors, attributes, combinators, ... for targeting the children of a stylesheet component.

### IDs & Classes

```javascript
const Stylesheet = Style`
	#someID.aClass {
		color: lightskyblue;
	}
`;

<Stylesheet>
	<button>I have no style</button>
	<button id="someID" className="aClass">
		I have style
	</button>
</Stylesheet>;
```

### Attributes

```javascript
const Stylesheet = Style`
	MyFancyLink[href] {
		color: lightskyblue;
	}
`;

<Stylesheet>
	<MyFancyLink href="https://github.com/">Github</MyFancyLink>
</Stylesheet>;
```

### Nesting

```javascript
const Style = Stylesheet`
	> div {
		h1 + button {
			color: lightskyblue;
		}

		button:nth-child(3n+1) {
			background-color: hotpink;
		}
	}
`;
```

## Cascade

React-style-sheet figures out which elements needs which styles.
The styles are applied to the elements themselves, and are not added to the global scope.
This means styles **only** affect the elements from the render that uses the stylesheet.
It does not cascade into other components.

If you have, for example, a MyButton component that renders a button tag:

```javascript
const MyButton = props => {
	return <button>push me</button>;
};
```

And you render this MyButton component within a stylesheet like this:

```javascript
const Stylesheet = Style`
	button {
		color: lightskyblue;
	}
`;

const Component = props => {
	return (
		<Stylesheet>
			<MyButton />
		</Stylesheet>
	);
};
```

There is no child of stylesheet that is a 'button' element,
so the button style rule is not added to any of the stylesheets' children.
Anything rendered inside the MyButton component does not suffer from cascading styles.

If however your stylesheet was defined as:

```javascript
const Stylesheet = Style`
	MyButton {
		color: lightskyblue;
	}
`;
```

The corresponding style will be passed to the MyButton component as a style attribute.
It would have effectively been rendering the same as if the component was defined like:

```javascript
const Component = props => {
	return <MyButton style={{ color: 'lightskyblue' }} />;
};
```

The component MyButton decides what to do with the style attribute.
The component is in full control of its rendering, and no global styles or cascade are messing with the render of MyButton.
