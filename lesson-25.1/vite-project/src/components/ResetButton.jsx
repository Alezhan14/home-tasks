import React, {Component} from "react";


class ResetButton extends Component {

    reset = () => {
        localStorage.clear();
        location.reload();
    }

    render() {
        return (
            <div>
                <a className="btn btn-secondary pr-5" onClick={this.reset} href="#">Reset</a>
            </div>
        )
    }
}

export default ResetButton