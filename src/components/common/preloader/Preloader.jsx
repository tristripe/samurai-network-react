import React from "react";
import preloader from "../../../assets/img/preloader.svg";

const Preloader = () => {
    return (
        <div className="popup">
            <img src={preloader} alt="loading"/>
        </div>
    )
}

export default Preloader;
