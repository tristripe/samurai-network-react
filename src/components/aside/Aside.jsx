import React from 'react';
import NavBar from "./navbar/NavBar";
import Friends from "./friends/Friends";

const Aside = (props) => {
    return (
            <aside className="aside">
                <NavBar/>
                <Friends state={props.state}/>
            </aside>
    );
}

export default Aside;
