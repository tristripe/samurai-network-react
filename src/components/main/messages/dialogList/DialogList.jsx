import React from "react";
import DialogItem from "./dialogItem/DialogItem";

const DialogContent = (props) => {
    return (
        <div className="dialog-list__message dialog-list__message--mine">
            <div className="dialog-list__avatar">
                <img src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="" width="100"/>
            </div>
            <p>{props.message}</p>

        </div>
    )
}

const DialogList = (props) => {
    let newMessageElement = React.createRef();

    let onMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageBody(text);
    }

    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = props.dialogsPage.messages.map(message => <DialogContent message={message.message} key={message.id} id={message.id} />);

    return (
        <section className="dialog-list">
            <ul>
                {dialogElements}
            </ul>
            <div className="dialog-list__messages">
                {messageElements}
            </div>
            <div>
            <textarea
                ref={newMessageElement}
                placeholder="Your post"
                onChange={onMessageChange}
                value={props.newMessageBody}/>
                <button onClick={onMessageClick} type="button">Send Message</button>
            </div>
        </section>
    );
}



export default DialogList;
