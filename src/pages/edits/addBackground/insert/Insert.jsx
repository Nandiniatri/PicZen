import { useEffect, useState } from "react";
import "./Insert.css";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const Insert = () => {
    const { insertData } = useAppEvent();

    // if (!insertData) return null;
    console.log("Insert Data:", insertData);

    return (
        <div className="insert-panel">

            <h2 className="panel-title">Insert</h2>

        </div>
    );
};

export default Insert;
