import { useState } from "react";
import axios from "axios";
function Login() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  function login() {
    axios.post("http://localhost:8080/auth/login", {
      name: name,
      password: password,
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
      </div>
    </div>
  );
}

export default Login;
