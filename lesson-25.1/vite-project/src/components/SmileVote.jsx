import React, {Component} from "react";



class SmileVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteCount: Number(localStorage.getItem(this.props.smile)) || 0,
        }
    }

    incrementVote = () => {
        this.setState({voteCount: this.state.voteCount + 1}, () => {
            localStorage.setItem(this.props.smile, this.state.voteCount);
        });
    }

    render() {

        return(
            <li className="nav-item">
                <span>{this.state.voteCount}</span> <a className="nav-link" onClick={this.incrementVote} href="#">{this.props.smile}</a>
            </li>
        )
    }
}

export default SmileVote