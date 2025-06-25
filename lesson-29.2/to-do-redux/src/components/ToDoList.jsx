import ToDoListItem from "./ToDoListItem.jsx";
import {useSelector} from "react-redux";

function ToDoList() {
    const toDos = useSelector((state) => state.toDo);
    const [toDosCount] = useSelector((state) => [state.toDo.length]);

    if (toDosCount === 0) {
        return <p>No To-Do items found!</p>;
    }

    return (
      <>
          <ul className="list-group">
              {toDos.map((todo) => (
                  <ToDoListItem todo={todo} />
              ))}
          </ul>
          <p>{toDosCount} To-Do items</p>
      </>
    )
}

export default ToDoList
