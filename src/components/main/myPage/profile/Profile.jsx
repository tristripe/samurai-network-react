import React from 'react';
import Preloader from "../../../common/preloader/Preloader";


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <section className="profile">
            <div className="profile__image">
                <img src={props.profile.photos.large}/>
            </div>
            <div className="profile__data">
                <h2>{props.profile.fullName}</h2>
                <ul>
                    <li>{props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </section>
    );
}

export default Profile;
