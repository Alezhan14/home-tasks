import {useDispatch, useSelector} from "react-redux";
import {addToDo, clearToDo, fetchToDoRequest} from "../redux-toolkit/toDoSlices.js";
import {useState} from "react";


function Form() {
    const dispatch = useDispatch();
    const toDos = useSelector((state) => state.ToDoData.toDoList);
    const [formValue, setFormValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if(!formValue.trim()) return;

        setFormValue(formValue.trim())
        dispatch(addToDo(formValue))
        setFormValue('')
    }

    function handleClear() {
        dispatch(clearToDo(''));
    }

    function handleUpload() {
        dispatch(fetchToDoRequest());
    }

    return(
        <>
            <form className="form d-flex gap-3 mb-3" onSubmit={handleSubmit}>
                <input type="text" className="form-control" id="personNumber" placeholder="Enter text to do" value={formValue} onChange={(event) => setFormValue(event.target.value)} />

                <span className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a href="#" onClick={handleClear} className="btn btn-danger">Clear</a>
                    {toDos.length === 0 && (
                        <a href="#" onClick={handleUpload} className="btn btn-danger">
                            Upload
                        </a>
                    )}
                </span>
            </form>
        </>
    )
}

export default Form