import { Route, Routes } from "react-router-dom";

import SignupLogin from "./components/SignupLogin";
import UserHomepage from "./components/UserHomepage";

import Explore from "./components/Explore";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import More from "./components/More";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupLogin />}></Route>
      <Route path="/homepage" element={<UserHomepage />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/messages" element={<Messages />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/more" element={<More />}></Route>
    </Routes>
  );
}

export default App;
