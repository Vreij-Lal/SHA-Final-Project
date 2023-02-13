import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Signup({ setToggle }) {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  function signup() {
    axios.post("http://localhost:8080/auth/signup", {
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
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
          onClick={() => {
            signup();
          }}
        >
          Signup
        </button>
        <p>
          Already Have An Account ?{" "}
          <Link
            onClick={() => {
              setToggle(true);
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
