import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Homepage />
          </>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <>
            <Signup />
          </>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
