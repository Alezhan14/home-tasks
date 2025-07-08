import ToDoListItem from "./ToDoListItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchToDoRequest} from "../redux-toolkit/toDoSlices.js";

function ToDoList() {
    const toDos = useSelector((state) => state.ToDoData.toDoList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchToDoRequest());
    }, [dispatch]);

    return (
        <>
            <ul className="list-group">
                {toDos.map((item) => (
                    <ToDoListItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}

export default ToDoList;