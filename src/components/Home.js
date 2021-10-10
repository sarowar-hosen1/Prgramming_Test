import React, { useEffect, useState } from 'react';
import FilterBar from "./FilterBar";
import SpaceXLists from './SpaceXList';
import { useDispatch, useSelector } from "react-redux";
import { spaceXRequest, spaceXSuccess, spaceXError } from '../redux/spaceX/spaceXAction';
import { ClipLoader } from "react-spinners"

const Home = () => {
    const dispatch = useDispatch();

    const spaceX = useSelector(state => state.spaceX);
    const { loading, data, error } = spaceX;
    const [filteredData, setFilterdData] = useState(data);

    //fetch data and update state
    useEffect(() => {
        dispatch(spaceXRequest())
        fetch("https://api.spacexdata.com/v3/launches")
            .then(res => res.json())
            .then(data => dispatch(spaceXSuccess(data)))
            .catch(error => dispatch(spaceXError(error)))
    }, [dispatch])

    // handle searchResult
    const handleSearch = (value) => {
        const searchResult = data.filter(space => {
            return space.mission_name.toLowerCase().includes(value.toLowerCase());
        })
        setFilterdData(searchResult)
    }

    // handle filter by date range
    const handleDate = (date) => {

        if (date === "last_year") {
            const startDate = Date.parse("2020-01-01");
            const endDate = Date.parse(new Date());

            const searchResult = data.filter(space => Date.parse(space.launch_date_utc) > startDate && Date.parse(space.launch_date_utc) < endDate)
            setFilterdData(searchResult)
        }
        else if (date === "last_month") {

            var lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);

            const searchResult = data.filter(space => Date.parse(space.launch_date_utc) > Date.parse(lastMonth))
            setFilterdData(searchResult)
        } else if (date === "last_week") {
            var today = new Date();
            var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

            const searchResult = data.filter(space => Date.parse(space.launch_date_utc) > Date.parse(lastWeek));
            setFilterdData(searchResult)
        }
    }

    // handle filter by year
    const handleYear = (year) => {
        const searchResult = data.filter(space => space.launch_year === "" + year);
        setFilterdData(searchResult)
    }

    // handle filter by launch status
    const handleLaunchStatus = (status) => {
        const searchResult = data.filter(space => space.launch_success === status);
        setFilterdData(searchResult);
    }

    // handle filter by upcoming status
    const handleUpcomming = (status) => {
        const searchResult = data.filter(dt => dt.upcoming === status)
        setFilterdData(searchResult)
    }

    // handle cleat to all filter
    const handleFilterClear = () => {
        window.location.reload()
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-3">
                    <FilterBar
                        handleSearch={handleSearch}
                        handleDate={handleDate}
                        handleYear={handleYear}
                        handleLaunchStatus={handleLaunchStatus}
                        handleUpcomming={handleUpcomming}
                        handleFilterClear={handleFilterClear}
                    >
                    </FilterBar>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {/* conditionally rendering */}
                        {
                            error &&
                            <p className="text-danger text-center">Failed to load data</p>
                        }
                        {
                            loading &&
                            <div className="d-flex justify-content-center align-items-center h-100"><ClipLoader /></div>
                        }
                        {
                            filteredData.length > 0 ?
                                filteredData.map((spaceX) => <SpaceXLists spaceX={spaceX} key={spaceX.mission_name}></SpaceXLists>)
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