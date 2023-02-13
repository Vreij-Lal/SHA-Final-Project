import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserHomepage from "./components/UserHomepage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>

      <Route path="/homepage" element={<UserHomepage />}></Route>
    </Routes>
  );
}

export default App;
