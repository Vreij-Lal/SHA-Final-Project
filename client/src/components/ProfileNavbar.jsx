import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProfileNavbar.scss';
import logo from '../Logo.png';

function ProfileNavbar() {
  const [username, setUsername] = useState('');
  const [userFriendRequests, setUserFriendRequests] = useState([]);
  const myElementRef = useRef(null);

  useEffect(() => {
    const myElement = myElementRef.current;

    axios
      .post('http://localhost:8080/auth/verify', {
        token: localStorage.getItem('token'),
      })
      .then((data) => {
        setUsername(data.data.name);
        setUserFriendRequests(data.data.friendRequests);
      });
  }, [userFriendRequests]);

  useEffect(() => {
    const myElement = myElementRef.current;
    if (userFriendRequests.length) {
      myElement.classList.add('with-dot');
    } else {
      myElement.classList.remove('with-dot');
    }
  }, [userFriendRequests]);

  return (
    <section className="profile-navbar-container">
      <section className="user-profile-container">
        <img src={logo} alt="" className="profile" />
        <section className="username-header">
          <h4 className="heading-4">{username}</h4>
        </section>
      </section>

      <nav>
        <ul className="navbar">
          <NavLink className="navbar-link" to="/homepage">
            Home
          </NavLink>
          <NavLink className="navbar-link" to="/explore">
            Explore
          </NavLink>
          <NavLink className="navbar-link" to="/messages">
            Messages
          </NavLink>
          <NavLink className="navbar-link" to="/profile">
            Profile
          </NavLink>
          <NavLink
            className="navbar-link"
            to="/notifications"
            ref={myElementRef}
          >
            Notifications
          </NavLink>
          <button onClick={() => console.log(userFriendRequests)}>get</button>
        </ul>
      </nav>
    </section>
  );
}

export default ProfileNavbar;
