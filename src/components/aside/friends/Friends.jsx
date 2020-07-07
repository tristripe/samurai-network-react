import React from "react"
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/friends/" + props.id;
    return (
        <li>
            <NavLink to={path}>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" alt="" width="50"/>
                </div>
                <p>{props.name}</p>
            </NavLink>
        </li>
    );
}

const Friends = (props) => {
    let friendElements = props.state.map(friends => <FriendItem name={friends.name} id={friends.id} />);

    return (
        <section className="friends">
            <ul>
                {friendElements}
            </ul>
        </section>
    );
}

export default Friends;
