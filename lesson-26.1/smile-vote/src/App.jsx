import React, { Component } from 'react';
import './App.css';
import SmileVote from "./components/SmileVote.jsx";
import ViewWinner from "./components/ViewWinner.jsx";
import ResetButton2 from "./components/ResetButton.jsx";

class App extends Component {
	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<SmileVote smile="&#129331;" />
								<SmileVote smile="&#129332;" />
								<SmileVote smile="&#129333;" />
								<SmileVote smile="&#129334;" />
								<SmileVote smile="&#129335;" />
							</ul>
						</div>
					</div>
				</nav>
				<ViewWinner />
				<ResetButton2 />
			</>
		)
	}
}

export default App
