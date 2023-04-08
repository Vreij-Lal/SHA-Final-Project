import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.scss";

import logo from "../Logo.png";

function Login({ setToggle }) {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  function login() {
    axios
      .post("http://localhost:8080/auth/login", {
        name: name,
        password: password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/homepage");
        } else {
          alert(data.message);
        }
      });
  }

  return (
    <section className="login-container">
      <section className="login-section">
        <img src={logo} alt="" className="profile"/>
        <h4 className="heading-4">Login</h4>

        <section>
          <input
            type="name"
            placeholder="username"
            className="input-field"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>

        <section>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </section>

        <button
          id="login-button"
          className="button-1"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
        <p className="p">
          Don't Have An Account ?{" "}
          <Link
            onClick={() => {
              setToggle(false);
            }}
          >
            Signup
          </Link>
        </p>
      </section>
    </section>
  );
}

export default Login;
