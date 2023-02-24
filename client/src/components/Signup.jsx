import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.scss";
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
    <div className="signup-container">
      <div className="signup-section">
        <div>
          <h1>Signup</h1>
        </div>
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
    </div>
  );
}

export default Signup;
