import "../styles/Main.scss";

import ProfileNavbar from "./ProfileNavbar";
import Home from "./Home";
import NewsBar from "./NewsBar";

function Homepage() {
  return (
    <div className="container">
      <ProfileNavbar />
      <Home />
      <NewsBar />
    </div>
  );
}

export default Homepage;
