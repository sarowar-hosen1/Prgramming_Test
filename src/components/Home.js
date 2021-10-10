import React, { useEffect} from 'react';
import FilterBar from "./FilterBar";
import SpaceXLists from './SpaceXList';
import { useDispatch, useSelector } from "react-redux";
import { spaceXRequest, spaceXSuccess, spaceXError } from '../redux/spaceX/spaceXAction';
import { ClipLoader } from "react-spinners"

const Home = () => {
    const dispatch = useDispatch();
    const spaceX = useSelector(state => state.spaceX);
    const { loading, data, error } = spaceX;
    

    useEffect(() => {
        dispatch(spaceXRequest())
        fetch("https://api.spacexdata.com/v3/launches")
            .then(res => res.json())
            .then(data => dispatch(spaceXSuccess(data)))
            .catch(error => dispatch(spaceXError(error)))
    }, [dispatch])

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-3">
                    <FilterBar />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {
                            error &&
                            <p className="text-danger text-center">Failed to load data</p>
                        }
                        {
                            loading &&
                            <div className="d-flex justify-content-center align-items-center h-100"><ClipLoader /></div>
                        }
                        {
                            data.length  > 0?
                                data.map((spaceX) => <SpaceXLists spaceX={spaceX} key={spaceX.mission_name}></SpaceXLists>)
                                :
                                <h5 className="text-center">No data found!</h5>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;