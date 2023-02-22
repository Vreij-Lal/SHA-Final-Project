import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <h1>Login</h1>
      <div>
        <div>
          <input
            type="name"
            placeholder="username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button
          id="login-button"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
        <p>
          Don't Have An Account ?{" "}
          <Link
            onClick={() => {
              setToggle(false);
            }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
