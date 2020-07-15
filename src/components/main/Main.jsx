import React from "react";
import Messages from "./messages/Messages";
import {Route} from "react-router-dom";
import Settings from "./settings/Settings";
import Music from "./music/Music";
import News from "./news/News";
import UsersContainer from "./users/UsersContainer";
import MyPageContainer from "./myPage/MyPageContainer";
import Login from "../login/Login";

const Main = (props) => {
    return (
            <main className="main">
                <Route path="/my-page/:userId?"
                       render={ () => <MyPageContainer/>}
                />
                <Route path="/messages"
                       render={ () => <Messages store={props.store} state={props.state}/>}/>
                <Route path="/users" render={ () => <UsersContainer/>}/>
                <Route path="/news" render={ () => <News/>}/>
                <Route path="/music" render={ () => <Music/>}/>
                <Route path="/settings" render={ () => <Settings/>}/>
                <Route path="/login" render={ () => <Login/>}/>
            </main>
    );
}

export default Main;
