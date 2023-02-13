import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Homepage() {
  let [toggle, setToggle] = useState(false);

  return toggle ? (
    <Login setToggle={setToggle} />
  ) : (
    <Signup setToggle={setToggle} />
  );
}

export default Homepage;
