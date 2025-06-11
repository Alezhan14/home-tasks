import React, { Component } from 'react';
import './App.css';
import SmileVote from "./components/SmileVote.jsx";
import ViewWinner from "./components/ViewWinner.jsx";
import ResetButton from "./components/ResetButton.jsx";

class App extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <SmileVote smile="&#128071;" />
                                <SmileVote smile="&#128070;" />
                                <SmileVote smile="&#128076;" />
                                <SmileVote smile="&#129295;" />
                                <SmileVote smile="&#129330;" />
                            </ul>
                        </div>
                    </div>
                </nav>
                <ViewWinner />
                <ResetButton />
            </>
        )
    }
}

export default App
