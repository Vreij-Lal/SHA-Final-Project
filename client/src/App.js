import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserHomepage from "./components/UserHomepage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/homepage" element={<UserHomepage />}></Route>
      <Route path="explore" element={<UserHomepage />}></Route>
      <Route path="messages" element={<UserHomepage />}></Route>
      <Route path="profile" element={<UserHomepage />}></Route>
      <Route path="more" element={<UserHomepage />}></Route>
    </Routes>
  );
}

export default App;
