function ListItem (props) {
    return (
        <>
            <li className="list-group-item">{props.text} - <a href="{props.link}">{props.link}</a></li>
        </>
    )
}

export default ListItem
