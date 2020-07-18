import React from 'react';
import Head from "./components/Head";
import Main from "./components/main/Main";
import {BrowserRouter} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Head/>
                <Main state={props.state}
                      store={props.store}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
