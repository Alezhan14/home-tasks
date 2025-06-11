import React, {Component, useState} from "react";

function ViewWinner() {
	const [winnerName, SetWinnerName] = useState('');
	const [winnerScore, SetWinnerScore] = useState('');

	const getWinner = () => {
		let values = Object.values(localStorage);
		let numericValues = values.map(Number);
		let maxValue = Math.max(...numericValues);

		Object.keys(localStorage).forEach(key => {
			if (Number(localStorage[key]) === maxValue) {
				SetWinnerName(key);
				SetWinnerScore(localStorage[key]);
			}
		});
	}

	return (
		<>
			<p>Won:{winnerName} with score: {winnerScore}</p>
			<div>
				<a className="ViewWinner btn btn-secondary pr-5" onClick={getWinner} href="#">Show results</a>
			</div>
		</>
	)
}


export default ViewWinner