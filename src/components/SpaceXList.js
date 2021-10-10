import React from 'react';
import {Link} from "react-router-dom"
const SpaceXLists = ({ spaceX }) => {

    return (
        <div className="col-md-4">
            <div className="card border mb-5">
                <img src={spaceX.links.mission_patch_small} alt="Mission Logo" className="card-img-top p-4" width="250" height="280"/>
                <div className="card-body">
                    <Link to={`/mission/${spaceX.mission_name}`} className="card-title h6">{spaceX.mission_name}</Link>
                    <p><b>Mission id: </b> {spaceX.mission_id.length ? spaceX.mission_id : "No ID"}</p>
                    <p><b>Launch year: </b> {spaceX.launch_year}</p>
                    <p><b>Flight number: </b>{spaceX.flight_number}</p>
                    {
                        spaceX.launch_success ?
                            <p className="text-success">Launch successfully</p>
                            :
                            <p className="text-danger">Launch failed</p>
                    }
                    <a className="btn btn-outline-secondary" href={spaceX.links.article_link} target="blank">Read article</a>
                </div>
            </div>
        </div>
    )
};

export default SpaceXLists;