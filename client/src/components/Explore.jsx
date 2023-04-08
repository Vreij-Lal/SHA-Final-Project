import ExploreUser from "./ExploreUser";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Explore.scss";

function Explore() {
  let [user, setUser] = useState([]);
  let [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setUsername(data.data.name);
        axios
          .get(`http://localhost:8080/user/${data.data._id}`)
          .then((data) => setUser([...data.data]));
      });
  }, []);

  return (
    <section className="explore-section-container">
      <header>
        <h1 className="heading-1">Explore</h1>
      </header>
      {user.map((element) => {
        return <ExploreUser user={element} />;
      })}
    </section>
  );
}

export default Explore;
