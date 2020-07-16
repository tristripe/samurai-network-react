import {addMessageActionCreator} from "../../../../redux/dialogsPageReducer";
import DialogList from "./DialogList";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/winthAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogs,
        newMessageBody: state.dialogs.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogList);
