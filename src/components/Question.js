import React from "react";
import { Image } from 'semantic-ui-react'

const Question = ({ content, imgSrc }) => {
	return (
		<div className="question">
			<h2>{content}</h2>
			<Image srcSet={imgSrc} fluid/>
		</div>
	);
};

export default Question;