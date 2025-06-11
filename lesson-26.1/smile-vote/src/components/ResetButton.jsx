import React, {Component} from "react";

function ResetButton() {
	const reset = () => {
		localStorage.clear();
		location.reload();
	}

	return (
		<>
			<div>
				<a className="btn btn-secondary pr-5" onClick={reset} href="#">Reset</a>
			</div>
		</>
	)
}


export default ResetButton