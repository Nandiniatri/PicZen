import React from "react";
import "./ResuableEditInfo.css";

const ResuableEditInfo = ({ src, data }) => {
    return (
        <>
            <div className="remove-card-img">
                <img
                    src={src}
                    alt="Remove Background"
                />
            </div>
            <div className="remove-card-text">
                <p>{data}</p>
            </div>
        </>
    );
};

export default ResuableEditInfo;
