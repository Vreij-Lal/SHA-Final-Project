import { Route, Routes } from "react-router-dom";

import SignupLogin from "./components/SignupLogin";
import Homepage from "./components/Homepage";
import ExplorePage from "./components/ExplorePage";
import MessagesPage from "./components/MessagesPage";
import ProfilePage from "./components/ProfilePage";
import NotificationPage from "./components/NotificationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupLogin />}></Route>

      <Route path="/homepage" element={<Homepage />}></Route>

      <Route path="/explore" element={<ExplorePage />}></Route>

      <Route path="/messages" element={<MessagesPage />}></Route>

      <Route path="/profile" element={<ProfilePage />}></Route>

      <Route path="/notifications" element={<NotificationPage />}></Route>
    </Routes>
  );
}

export default App;
