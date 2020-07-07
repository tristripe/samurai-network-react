import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <li>
            <NavLink to={path}>
                <div>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/7/71/2%D1%8516_%D0%90%D0%BF%D0%BF%D0%B0.jpg/revision/latest/top-crop/width/360/height/450?cb=20110327122646&path-prefix=ru" alt="" width="80"/>
                </div>
                <p>{props.name}</p>
            </NavLink>
        </li>
    );
}

export default DialogItem;
