import React from 'react';
import { Router } from '@reach/router';

import MatchId from './match-id';
import MatchTag from './match-tag';
import MatchHover from './match-hover';
import MatchClass from './match-class';
import MatchChild from './match-child';
import MatchSibling from './match-sibling';
import MatchAdjacent from './match-adjacent';
import MatchComponent from './match-component';
import MatchTagInText from './match-tag-in-text';
import MatchAttributes from './match-attributes';
import MatchFirstChild from './match-first-child';
import MatchNestedChild from './match-nested-child';
import MatchDirectChild from './match-direct-child';
import MatchNthChildOdd from './match-nth-child-odd';
import MatchNthChildEven from './match-nth-child-even';
import MatchNthChildFormula from './match-nth-child-formula';
import MatchDeeplyNestedChild from './match-deeply-nested-child';
import MatchChildWithoutParent from './match-child-without-parent';

import MismatchTag from './mismatch-tag';
import MismatchTagWithClass from './mismatch-tag-with-class';

import WithFragment from './with-fragment';
import WithInlineStyle from './with-inline-style';
import WithMultipleStylesheets from './with-multiple-stylesheets';
import WithInlineStyleComponent from './with-inline-style-component';
import WithSpecificityAscending from './with-specificity-ascending';
import WithSpecificityDescending from './with-specificity-descending';

const NotFound = props => {
	return `${props.location.pathname} not found`;
};

const Application = props => {
	return (
		<Router>
			<MatchId path="/match-id" />
			<MatchTag path="/match-tag" />
			<MatchHover path="/match-hover" />
			<MatchClass path="/match-class" />
			<MatchChild path="/match-child" />
			<MatchSibling path="/match-sibling" />
			<MatchAdjacent path="/match-adjacent" />
			<MatchComponent path="/match-component" />
			<MatchTagInText path="/match-tag-in-text" />
			<MatchAttributes path="/match-attributes" />
			<MatchFirstChild path="/match-first-child" />
			<MatchNestedChild path="/match-nested-child" />
			<MatchDirectChild path="/match-direct-child" />
			<MatchNthChildOdd path="/match-nth-child-odd" />
			<MatchNthChildEven path="/match-nth-child-even" />
			<MatchNthChildFormula path="/match-nth-child-formula" />
			<MatchDeeplyNestedChild path="/match-deeply-nested-child" />
			<MatchChildWithoutParent path="/match-child-without-parent" />

			<MismatchTag path="/mismatch-tag" />
			<MismatchTagWithClass path="/mismatch-tag-with-class" />

			<WithFragment path="/with-fragment" />
			<WithInlineStyle path="/with-inline-style" />
			<WithMultipleStylesheets path="/with-multiple-stylesheets" />
			<WithInlineStyleComponent path="/with-inline-style-component" />
			<WithSpecificityAscending path="/with-specificity-ascending" />
			<WithSpecificityDescending path="/with-specificity-descending" />

			<NotFound default />
		</Router>
	);
};

export default Application;
