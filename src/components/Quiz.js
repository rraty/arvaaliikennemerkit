import React from "react";
import { Button, Container, Divider, Grid } from "semantic-ui-react";
import Question from "./Question";
import AnswerOption from "./AnswerOption";

const Quiz = ({ question, buttonColor, answerOptions, onAnswerSelected }) => {
	const renderAnswerOptions = (answer) => {
		return (
			<AnswerOption 
				key={answer.id}
				answer={answer}
				questionId={question.id}
				onAnswerSelected={onAnswerSelected}
			/>
		);
	}
	
	return (
		<Container>
			<Grid columns={2} padded>
				<Grid.Column verticalAlign="middle" centered="true">
					<Question 
						content={""} 
						imgSrc={question.url}
					/>
				</Grid.Column>
				<Grid.Column verticalAlign="middle" centered="true">
					<Button.Group vertical>
					<h2>Mikä seuraavista liikennemerkeistä on kuvassa?</h2>
					<Divider />
						{answerOptions.map(renderAnswerOptions)}
					</Button.Group>
				</Grid.Column>
			</Grid>
		</Container>
	 );
}

export default Quiz;