import React, { useState, useEffect } from 'react';
import { Header } from "semantic-ui-react";
import Quiz from './components/Quiz';
import dummyData from "./services/data"

const shuffleArray = (arr) => (
	arr.sort(() => Math.random() - 0.5)
)

// Build with dummyData
const quests = dummyData.photos.lisaKilvet.content.map(l => ({
	id: l.id, title: l.title.match(/:(.*)/g).pop().replace(": ", ""), url: `https://live.staticflickr.com/${l.server}/${l.id}_${l.secret}_c.jpg`
}));

const App = () => {
	const [liikenneMerkit, setLiikenneMerkit] = useState([]);
	const [question, setQuestion] = useState({});
	const [answerOptions, setAnswerOptions] = useState([]);

	useEffect(() => {
		setLiikenneMerkit(shuffleArray(quests));
	}, []);

	const questionChooser = (num) => {
		// Valitaan kysymys quests listasta
		const nextQuestion = liikenneMerkit[num];

		// Asetetaan kysymys stateen
		setQuestion(nextQuestion)
		const possibleAnswers = shuffleArray(quests.filter(q => q.id !== nextQuestion.id));

		// Shift right answer to first
		possibleAnswers.unshift(nextQuestion);
		// Take 3 first objects (first one object in index 0 is the right answer)
		setAnswerOptions(shuffleArray(possibleAnswers.slice(0, 3)));
	}

	const handleAnswerSelected = event => {
		event.preventDefault();
		// green if answer is right and red if it is wrong
		if (event.target.value === question.title) {
			event.target.classList.add("positive")
			setTimeout((e) => {
				e.classList.remove("positive");
				questionChooser(liikenneMerkit.findIndex(q => q.id === question.id) + 1);
			}, 2000, event.target);

			//questionChooser(liikenneMerkit.findIndex(q => q.id === question.id) + 1)
		} else {
			event.target.classList.add("negative")

			setTimeout((e) => {
				e.classList.remove("negative")
			}, 3000, event.target);
		}
	}
	return (
		<div>
			<Header as="h2" textAlign="center">Liikennemerkit</Header>
			<button type="submit" onClick={() => questionChooser(0)} name="Moi" value="moi">Aloita</button>
			<Quiz
				question={question}
				answerOptions={answerOptions}
				onAnswerSelected={handleAnswerSelected}
			/>
		</div>
	)
}

export default App;
