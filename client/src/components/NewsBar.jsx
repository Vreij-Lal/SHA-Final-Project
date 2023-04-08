import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TrendingNews from "./TrendingNews";
import "../styles/NewsBar.scss";
function NewsBar() {
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
    <section className="newsbar-container">
      <header>
        <h1 className="heading-1">Trending News</h1>
      </header>
      {news.map((element) => {
        return <TrendingNews news={element} />;
      })}
    </section>
  );
}

export default NewsBar;
