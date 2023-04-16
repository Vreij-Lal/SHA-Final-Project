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
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=96073d3cd74642eb887c6a143ef8cb41"
      )
      .then((data) => setNews([data.data["articles"]]));
  }, []);


  return (
    <section className="newsbar-container">
      <header>
        <h1 className="heading-1">Trending News</h1>
      </header>

      {news.map((value) => {
        return value.map((value) => {
          return <TrendingNews news={value}/>
        })
      })}
      
    </section>
  );
}
export default NewsBar;
