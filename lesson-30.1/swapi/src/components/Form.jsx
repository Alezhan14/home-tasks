import {useDispatch, useSelector} from "react-redux";
import {fetchData, getUserData} from "../redux-toolkit/userDataSlice.js";
import {useEffect, useState} from "react";

function Form() {
    const dispatch = useDispatch();
    const [baseUrl, setBaseUrl] = useState('https://swapi.tech/api/people');
    const [peopleNumber, setPeopleNumber] = useState('');

    const data = useSelector((state) => state.userData.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getUserData());
        // setPeopleNumber(event.target.value);
        console.log(data);
    }

    return(
        <form className="form d-flex gap-3" onSubmit={handleSubmit}>
            <input type="text" className="form-control" id="baseUrl" value={baseUrl} onChange={(e) => {setBaseUrl(e.target.value)}} />
            <input type="text" className="form-control" id="peopleNumber" placeholder="Enter number of people" value={peopleNumber} onChange={(e) => {setPeopleNumber(e.target.value)}} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form