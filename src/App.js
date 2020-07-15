import React from 'react';
import Aside from "./components/aside/Aside";
import Head from "./components/Head";
import Main from "./components/main/Main";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Head/>
                <HeaderContainer/>
                <Aside state={props.state.sidebar.friends}/>
                <Main state={props.state}
                      store={props.store}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
