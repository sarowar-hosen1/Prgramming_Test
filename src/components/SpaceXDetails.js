import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SpaceXDetails = () => {
    const { name } = useParams();
    const [currentImage, setCurrentImage] = useState("");

    const spaceX = useSelector(state => state.spaceX.data);
    const currentData = spaceX.find(spaceX => spaceX.mission_name === name);

    const handleImgPreview = (src) => {
        setCurrentImage(src)
    }

    

    return (
        <div className="container my-5">
            <h4>Image Gallery</h4>
            <div className="row">
                <div className="col-md-8">
                    {
                        currentData && currentData.links.flickr_images.length &&
                            <>
                                <img
                                    className="img-thumbnail d-block m-auto mb-4"
                                    src={currentImage ? currentImage : currentData.links.flickr_images[0]}
                                    height="400"
                                    width="100%"
                                    alt=""
                                />
                                {
                                    currentData && currentData.links && currentData.links.flickr_images.length &&
                                    currentData.links.flickr_images.map((link, index) =>
                                        <img
                                            onClick={() => handleImgPreview(link)}
                                            className="m-2"
                                            src={link}
                                            height="100"
                                            width="100"
                                            key={index}
                                            alt=""
                                        />
                                    )
                                }
                            </>
                    }

                </div>
                <div className="col-md-4">
                    <img src={currentData && currentData.links.mission_patch_small} alt="" />
                    <p><b>Mission name: </b>{currentData.mission_name}</p>
                    <p><b>Mission id: </b>{currentData.mission_id.length && currentData.mission_id[0]}</p>
                    <p><b>Launch year: </b>{currentData.launch_year}</p>
                    <p><b>Fight number: </b>{currentData.flight_number}</p>
                    <br />
                    <p>{currentData.details}</p>
                    <a href={currentData.links.article_link}>Read more</a>
                </div>
            </div>
        </div>
    );
};

export default SpaceXDetails;