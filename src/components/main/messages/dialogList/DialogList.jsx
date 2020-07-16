import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const DialogContent = (props) => {
    return (
        <div className="dialog-list__message dialog-list__message--mine">
            <div className="dialog-list__avatar">
                <img src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt=""
                     width="100"/>
            </div>
            <p>{props.message}</p>

        </div>
    )
}

const DialogList = (props) => {

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                             id={dialog.id}/>);
    let messageElements = props.dialogsPage.messages.map(message => <DialogContent message={message.message}
                                                                                   key={message.id} id={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <section className="dialog-list">
            <ul>
                {dialogElements}
            </ul>
            <div className="dialog-list__messages">
                {messageElements}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </section>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <Field component={"textarea"} name={"newMessageBody"} placeholder={"Your post"}/>
            <button>Send Message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default DialogList;
