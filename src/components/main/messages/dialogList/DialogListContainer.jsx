import {addMessageActionCreator, updateNewMessageBody} from "../../../../redux/dialogsPageReducer";
import DialogList from "./DialogList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogs,
        newMessageBody: state.dialogs.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBody(body));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}



const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;
