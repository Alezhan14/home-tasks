import {useDispatch, useSelector} from "react-redux";
import {fetchData, getUserData, addCurrentPerson} from "../redux-toolkit/userDataSlice.js";
import {useEffect, useState} from "react";
import DataComponent from "./DataComponent.jsx";

function Form() {
    const dispatch = useDispatch();
    const [personNumber, setPersonNumber] = useState('');
    const data = useSelector((state) => state.userData.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    function handleSubmit(event) {
        event.preventDefault();

        const person = data.find(elem => elem.uid === personNumber);

        dispatch(addCurrentPerson(person))
    }

    return(
        <>
            <form className="form d-flex gap-3" onSubmit={handleSubmit}>
                <p>https://swapi.tech/api/people</p>
                <input type="number" className="form-control" id="personNumber" placeholder="Enter number of people" value={personNumber} onChange={(e) => {setPersonNumber(e.target.value)}} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form