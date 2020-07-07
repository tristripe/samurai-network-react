import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>Frog</h2>
                </div>
                <div className="login">
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;
