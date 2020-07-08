import React from "react";
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../../redux/myPageReducer";

class MyPageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
                <MyPage {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
   profile: state.myPage.profile
});

let WithUrlDataContainerComponent = withRouter(MyPageContainer)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
