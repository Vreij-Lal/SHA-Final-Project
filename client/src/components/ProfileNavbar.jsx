import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProfileNavbar.scss";
import logo from "../Logo.png";

function ProfileNavbar() {
  let [username, setUsername] = useState("");
  let [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => setUsername(data.data.name));
  }, [username]);
  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_177364906c8f6693d22ebc8f68445d85f0ef7&language=en"
      )
      .then((data) => setNews([...data.data.results]));
  }, []);
  return (
    <section className="profile-navbar-container">
      <section className="user-profile-container ">
        <img src={logo} alt="" className="profile" />
        <section className="username-header">
          <h4 className="heading-4">{username}</h4>
        </section>
      </section>

      <nav >
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
          <NavLink className="navbar-link" to="/notifications">
            Notifications
          </NavLink>
        </ul>
      </nav>
    </section>
  );
}

export default ProfileNavbar;
