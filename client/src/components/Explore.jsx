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
    <div className="explore-section-container">
      <div>
        <h1>Explore</h1>
      </div>
      {user.map((element) => {
        return <ExploreUser user={element} />;
      })}
    </div>
  );
}

export default Explore;
