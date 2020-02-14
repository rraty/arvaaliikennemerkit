import React from "react";
import { Button } from 'semantic-ui-react'



const AnswerOption = props => {
	return (
		<Button circular color="gray" onClick={props.onAnswerSelected} value={props.answer.title} size="huge" content={props.answer.title}>
			
		</Button>
	);
};

export default AnswerOption;