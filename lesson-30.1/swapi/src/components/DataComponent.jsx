import {useDispatch, useSelector} from "react-redux";
import {clearCurrentPersonData, fetchData} from "../redux-toolkit/userDataSlice.js";

function DataComponent(currentUser) {
    const dispatch = useDispatch();
    const shownPersonData = useSelector((state) => state.userData.shownPerson);

    function handleClear() {
        dispatch(clearCurrentPersonData());
    }

    return (
        <>
            <div className="d-flex align-items-left flex-column">
                <div className="border p-3 mb-3">
                    <p className="text-left">{JSON.stringify(shownPersonData)}</p>
                </div>
                <a href="#" className="btn btn-secondary" onClick={handleClear}>Clear</a>
            </div>
        </>
    );
}

export default DataComponent;