import React from "react";
import MyPage from "./MyPage";
import * as axios from "axios";
import {setUserProfile} from "../../../redux/myPageReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../../api/api";

class MyPageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
