function ToDoItem({ todo, onDelete, onToggle }
) {
	return (
		<>
			<li className="todo-item">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggle(todo.id)}
					className="todo-checkbox"
				/>
				<span style={{
					textDecoration: todo.completed ? 'line-through' : 'none'
				}}>
                {todo.text}
            </span>
				<button
					onClick={() => onDelete(todo.id)}
					className="todo-delete"
				>
					Delete
				</button>
			</li>

		</>
	)
}

export default ToDoItem