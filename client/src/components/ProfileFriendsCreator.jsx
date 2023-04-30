import React from 'react'
import "../styles/ProfileFriendsCreator.scss";
import logo from '../Logo.png';

function ProfileFriendsCreator(props) {

  return (
    <section className='profile-friends-creator'>
        <img src={logo} alt="" />
        <h5 className='heading-5'>{props.username}</h5>
        <button className='button-1'>Unfriend</button>
    </section>
  )
}

export default ProfileFriendsCreator