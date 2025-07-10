import {Link, NavLink} from "react-router";

function Header() {
    return (
        <header>
            <h1>Booking App</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/hotels"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Hotels
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;