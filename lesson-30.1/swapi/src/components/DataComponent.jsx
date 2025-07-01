import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux-toolkit/userDataSlice.js";
import {useEffect} from "react";

function DataComponent() {
    const dispatch = useDispatch();


    function handleClear() {
        // console.log({data});
    }

    return (
        <>
            <div className="d-flex align-items-left flex-column">
                <div className="border p-3 mb-3">
                    <p className="text-left">This component will display data fetched from an API.</p>
                </div>
                <a href="#" className="btn btn-secondary" onClick={handleClear}>Clear</a>
            </div>
        </>
    );
}

export default DataComponent;