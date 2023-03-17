import "../styles/Main.scss";
import ProfileNavbar from "./ProfileNavbar";

import Home from "./Home";
import NewsBar from "./NewsBar";

import { useState, useEffect } from "react";
import axios from "axios";

function UserHomepage() {
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
    <div className="container">
      <ProfileNavbar />
      <Home />
      <NewsBar />
    </div>
  );
}

export default UserHomepage;
