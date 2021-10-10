import React from 'react';
const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

const Filterbar = () => {

    return (
        <div className="border-left p-3 h-100 ">
            <h3 className="text-center border-bottom">Filters</h3>
            <div className="mt-4">
                <h6 className="text-muted text-uppercase">Search</h6>
                <input className="form-control" type="text" placeholder="Rocket name" />
            </div>


            <div className="mt-4">
                <h6 className="text-muted text-uppercase">By Launch Date</h6>
                <select className="form-select">
                    <option selected={true} disabled>By Launch Date</option>
                    <option value="last_week">Last Week</option>
                    <option value="last_month">Last Month</option>
                    <option value="last_year">Last Year</option>
                </select>
            </div>
            <div className="mt-4">
                <h6 className="text-muted text-uppercase mb-3">Launch year</h6>
                <div>
                    <select className="form-select">
                        <option selected={true} disabled>Select Year</option>
                        {
                            years.map((year, index) => <option value={year} key={index}>{year}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <h6 className="text-muted text-uppercase mb-3">Launch status</h6>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success">Success   </button>
                    <button className="btn btn-danger">Failed</button>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <h5 className="text-muted mb-3">Upcomming</h5>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"/>
                </div>
            </div>

            <button className="btn btn-outline-secondary w-100">Clear filters</button>
        </div>
    );
};

export default Filterbar;