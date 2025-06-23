import {ErrorMessage, Field, Form, Formik} from "formik";
import ToDoItem from "./ToDoItem.jsx";
import {useState} from "react";

function ToDoList() {
    const [ToDos, SetToDo] = useState([]);
    const initialValues = {
        ToDoText: ''
    }

    function validateToDo(value) {
        const errors = {};
        if (!value.ToDoText) {
            errors.ToDoText = 'Required';
        } else if (value.ToDoText.length < 5) {
            errors.ToDoText = 'Must be at least 5 characters';
        } else if (ToDos.includes(value.ToDoText)) {
            errors.ToDoText = 'To-Do already exists';
        }
        return errors;
    }

    function addToDo(value, formikBag) {
        SetToDo (prevToDos => [...prevToDos, value.ToDoText]);
        formikBag.resetForm();
    }

    return(
        <>
            <Formik initialValues={initialValues} onSubmit={addToDo} validate={validateToDo}>
                <Form>
                    <div className="mb-3">
                        <div className="d-flex">
                            <Field id="ToDoText" type="text" name="ToDoText" />
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                        <ErrorMessage component="div" className="text-danger" name="ToDoText" />
                    </div>
                    <ul className="list-group">
                        {ToDos.map((todo) => (
                            <ToDoItem value={todo} ToDos={ToDos} SetToDo={SetToDo} />
                        ))}
                    </ul>
                </Form>
            </Formik>
        </>
    )
}

export default ToDoList