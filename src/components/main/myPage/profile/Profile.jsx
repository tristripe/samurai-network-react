import React from 'react';
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./profileStatus/ProfileStatus";
import userPhoto from "../../../../assets/img/user.png";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <section className="profile">


            <div className="profile__image">
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="example" width="100" height="100"/>
            </div>
            <div className="profile__data">
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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
