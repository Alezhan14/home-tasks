
function ToDoItem({value, ToDos, SetToDo}) {

    function deleteToDo() {
        SetToDo(ToDos.filter((todo) => todo !== value));
    }
    return(
        <>
            <li className="list-group-item"><span>{value}</span> <a onClick={deleteToDo} className="btn btn-secondary">Delete</a></li>
        </>
    )
}

export default ToDoItem