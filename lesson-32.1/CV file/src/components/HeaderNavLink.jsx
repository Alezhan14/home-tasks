import {NavLink} from "react-router";

function HeaderNavLink({children, destination}) {
    return (
        <NavLink to={destination} style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : ""
            };
        }}>{children}</NavLink>
    )
}

export default HeaderNavLink