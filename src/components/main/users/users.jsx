import React from "react";
import userPhoto from "../../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <section className="users">
            <ul className="users__pagination">
                {pages.map(p => {
                    return (
                        <li>
                            <span className={props.currentPage === p && 'active'} onClick={(e) => {
                                props.onPageChanged(p)
                            }}>
                                {p}
                            </span>
                        </li>
                    )

                })}
            </ul>

            <ul>{

                props.users.map(u =>
                    <li key={u.id}>
                        <div>

                            <NavLink to={'my-page/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} width="100"
                                     alt="ImgAlt"/>
                            </NavLink>


                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    usersAPI.unfollowUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    usersAPI.followUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });
                                }}>Follow</button>}
                        </div>

                        <div>
                            <h3>{u.name}</h3>
                            <p>{u.status}</p>
                            <p>
                                <span>u.location.country</span>
                                <span>u.location.city</span>
                            </p>
                        </div>
                    </li>
                )
            }</ul>
        </section>
    )
}

export default Users;
