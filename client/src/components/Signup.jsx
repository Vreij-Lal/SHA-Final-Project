import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.scss";
import logo from "../Logo.png";
function Signup({ setToggle }) {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  const navigate = useNavigate();
  function signup() {
    axios
      .post("http://localhost:8080/auth/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.token) {
          navigate("/homepage");
        } else {
          alert(data.message);
        }
      });
  }

  return (
    <section className="signup-container">

      <section className="signup-section">

        <img src={logo} alt="" className="profile"/>

        <h4 className="heading-4">Sign up</h4>

        <section>
          <input
            type="text"
            placeholder="username"
            className="input-field"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>

        <section>
          <input
            type="text"
            placeholder="email"
            className="input-field"
            onChange={(e) => {
              setEmail(e.target.value);
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
        className="button-1"
          onClick={() => {
            signup();
          }}
        >
          Signup
        </button>
        <p className="p">
          Already Have An Account ?{" "}
          <Link
            onClick={() => {
              setToggle(true);
            }}
          >
            Login
          </Link>
        </p>
      </section>
    </section>
  );
}

export default Signup;
