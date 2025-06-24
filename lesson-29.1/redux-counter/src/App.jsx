import './App.css'
import {increment} from "./redux-toolkit/counterSlice.js";
import {decrement} from "./redux-toolkit/counterSlice.js";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    function handleIncrement() {
        dispatch(increment())
    }
    function handleDecrement() {
        dispatch(decrement())
    }

  return (
    <>
        <h1>Value: {count}</h1>
        <div className="d-flex justify-content-center">
            <a href="#" onClick={handleIncrement} className="btn btn-primary m-2">+</a>
            <a href="#" onClick={handleDecrement} className="btn btn-primary m-2">-</a>
        </div>
    </>
  )
}

export default App
