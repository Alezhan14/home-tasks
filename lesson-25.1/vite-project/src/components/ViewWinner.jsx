import React, {Component} from "react";

class ViewWinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winnerName: '',
            winnerScore: ''
        }
    }

    getWinner = () => {
        let values = Object.values(localStorage);
        let numericValues = values.map(Number);
        let maxValue = Math.max(...numericValues);


        Object.keys(localStorage).forEach(key => {
            if (Number(localStorage[key]) === maxValue) {
                this.setState({
                    winnerName: key,
                    winnerScore: localStorage[key]
                });
            }
        });

    }

    render() {
        return(
            <>
                <p>Won:{this.state.winnerName} with score: {this.state.winnerScore}</p>
                <div>
                    <a className="ViewWinner btn btn-secondary pr-5" onClick={this.getWinner} href="#">Show results</a>
                </div>
            </>
        )
    }
}

export default ViewWinner