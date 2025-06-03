import ListItem from "./ListItem.jsx";

function List(props) {
    return (
        <>
            <ul className="list-group">
                <ListItem text="discord" link="http://discord" />
                <ListItem text="reddit" link="http://reddit" />
                <ListItem text="github" link="http://github" />
            </ul>
        </>
    )
}

export default List
