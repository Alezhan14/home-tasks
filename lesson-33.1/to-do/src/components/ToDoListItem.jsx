import {completeToDo, editToDo, removeToDo} from "../redux-toolkit/toDoSlices.js";
import {useDispatch} from "react-redux";

function ToDoListItem({item}) {
    const dispatch = useDispatch();

    function handleRemoveToDo() {
        dispatch(removeToDo(item.id));
    }

    function handleEditToDo() {
        dispatch(editToDo(item));
    }

    function handleCompleteToDo() {
        dispatch(completeToDo(item.id));
    }

    return(
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center" role="listitem">
                <span style={{textDecoration: item.completed ? 'line-through' : 'none'}} onClick={handleCompleteToDo}>{item.title}</span>
                <span className="d-flex gap-2">
                <a href="#" onClick={handleRemoveToDo} className="btn btn-secondary">Delete</a>
                <a href="#" onClick={handleEditToDo} className="btn btn-secondary">Edit</a>
            </span>
            </li>
        </>
    )
}

export default ToDoListItem