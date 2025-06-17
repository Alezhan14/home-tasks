import Nav from "../components/Nav.jsx";
import {Outlet} from "react-router";

function About() {
	return(
		<>
			<Nav/>
			<div className="container">
				<Outlet />
			</div>
		</>
	)
}

export default About