import NavItem from "./NavItem.jsx";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem text="Films" link="https://swapi.tech/api/films" />
                            <NavItem text="People" link="https://swapi.tech/api/people" />
                            <NavItem text="Planets" link="https://swapi.tech/api/planets" />
                            <NavItem text="Species" link="https://swapi.tech/api/species" />
                            <NavItem text="Starships" link="https://swapi.tech/api/starships" />
                            <NavItem text="Vehicles" link="https://swapi.tech/api/vehicles" />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
