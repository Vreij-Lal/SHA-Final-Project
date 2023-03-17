import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function SignupLogin() {
  let [toggle, setToggle] = useState(false);

  return toggle ? (
    <Login setToggle={setToggle} />
  ) : (
    <Signup setToggle={setToggle} />
  );
}

export default SignupLogin;
