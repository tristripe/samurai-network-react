import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/my-page">My Page</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/users">Users</NavLink>
        </nav>
    );
}

export default NavBar;
