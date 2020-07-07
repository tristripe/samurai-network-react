import React from "react";
import DialogListContainer from "./dialogList/DialogListContainer";

const Messages = (props) => {
    return (
        <section className="dialogs">
            <DialogListContainer state={props.state} store={props.store}/>
        </section>
    );
}

export default Messages;
