import React from "react";

const OldPostItem = (props) => {
    return (
        <p>{props.message}<span>{props.likes}</span></p>
    )
}

export default OldPostItem;
