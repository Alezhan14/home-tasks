import ToDoItem from "./ToDoItem.jsx";
import {useState} from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    const [id, setId] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        setId(id + 1);
        if (value.trim()) {
            const newTodo = {
                id: id,
                text: value.trim(),
                completed: false
            };
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setValue("");
        }
    }

    function handleDelete(todoId) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    }

    function handleToggle(todoId) {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    }

    return (
        <div className="todo-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="form__input"
                    placeholder="Enter new todo"
                />
                <button type="submit" className="form__btn">
                    Add Todo
                </button>
            </form>

            <ul className="todos-wrapper">
                {todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );

}

export default ToDoList