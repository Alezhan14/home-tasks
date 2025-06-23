import {Field, Form, Formik} from "formik";
import ToDoItem from "./ToDoItem.jsx";
import {useState} from "react";

function ToDoList() {
    const [ToDos, SetToDo] = useState([]);
    const initialValues = {
        ToDoText: ''
    }

    function addToDo(value, formikBag) {
        SetToDo (prevToDos => [...prevToDos, value.ToDoText]);
        formikBag.resetForm();
    }

    return(
        <>
            <Formik initialValues={initialValues} onSubmit={addToDo}>
                <Form>
                    <div className="mb-3 d-flex">
                        <Field id="ToDoText" type="text" name="ToDoText" />
                        <button type="submit" className="btn btn-primary">Add</button>
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