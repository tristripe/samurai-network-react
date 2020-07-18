import React from "react";
import Messages from "./messages/Messages";
import {Route, withRouter} from "react-router-dom";
import Settings from "./settings/Settings";
import Music from "./music/Music";
import News from "./news/News";
import UsersContainer from "./users/UsersContainer";
import MyPageContainer from "./myPage/MyPageContainer";
import Login from "../login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import HeaderContainer from "../header/HeaderContainer";
import Aside from "../aside/Aside";
import {initializeApp} from "../../redux/mainReducer";
import Preloader from "../common/preloader/Preloader";

class Main extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <>
            <HeaderContainer/>
            <Aside state={this.props.state.sidebar.friends}/>
            <main className="main">
                <Route path="/my-page/:userId?"
                       render={() => <MyPageContainer/>}
                />
                <Route path="/messages"
                       render={() => <Messages store={this.props.store} state={this.props.state}/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </main>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(Main);
