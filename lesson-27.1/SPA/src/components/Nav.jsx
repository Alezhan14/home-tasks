import {Link} from "react-router";

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/FAQ">FAQ</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav