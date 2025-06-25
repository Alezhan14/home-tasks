import {useDispatch} from "react-redux";
import {removeToDo} from "../redux-toolkit/toDoSlice.js";
import {toggleToDo} from "../redux-toolkit/toDoSlice.js";

function ToDoListItem({key, todo}) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(removeToDo(todo.id));
    }

    function handleToggle() {
        dispatch(toggleToDo(todo.id))
    }

    return (
      <>
          <li className="list-group-item d-flex justify-content-between align-items-center"> <span className={todo.completed && 'text-decoration-line-through'} onClick={handleToggle} >{todo.text}</span><a onClick={handleDelete} className="btn btn-danger" href="#">Delete</a></li>
      </>
    )
}

export default ToDoListItem
