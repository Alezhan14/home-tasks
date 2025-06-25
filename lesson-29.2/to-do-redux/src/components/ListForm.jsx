import {addToDo} from "../redux-toolkit/toDoSlice.js";
import {useDispatch} from "react-redux";
import {useState} from "react";

function ListForm() {
    const dispatch = useDispatch();
    const [text, setToDoText] = useState('');

    function handleSubmit() {
        if(text.trim()) {
            dispatch(addToDo(text))
            setToDoText('')
        }
    }

    return (
      <>
          <form onSubmit={handleSubmit}>
              <h1>To Do list</h1>
              <div className="mb-3 d-flex justify-content-between">
                  <input type="text" className="form-control" id="text" value={text} onChange={(e) => {setToDoText(e.target.value)}} />
                  <button type="submit" className="btn btn-primary">Submit</button>
              </div>

          </form>
      </>
    )
}

export default ListForm
