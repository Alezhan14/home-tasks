import React, {Component, useEffect, useState} from "react";

function SmileVote(props) {
	let [voteCount, setVoteCount] = useState(Number(localStorage.getItem(props.smile)) || 0);

	return(
		<li className="nav-item">
			<span>{voteCount}</span> <a className="nav-link" onClick={() => {
			setVoteCount(voteCount + 1);
			localStorage.setItem(props.smile, voteCount + 1)
		}} href="#">{props.smile}</a>
		</li>
	)
}

export default SmileVote