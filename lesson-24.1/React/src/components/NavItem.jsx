function NavItem(props) {
    return (
        <>
            <li className="nav-item btn">
                <a className="nav-link active" aria-current="page" href={props.link}>{props.text}</a>
            </li>
        </>
    )
}

export default NavItem
