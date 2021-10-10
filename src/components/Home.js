import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { spaceXRequest, spaceXSuccess, spaceXError } from '../redux/spaceX/spaceXAction';

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
            <h3>Home</h3>
        </div>
    );
};

export default Home;