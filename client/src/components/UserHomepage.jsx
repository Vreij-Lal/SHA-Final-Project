import "../styles/UserHomepage.scss";
import PostCreator from "./postCreator";
import Posts from "./Posts";
function UserHomepage() {
  return (
    <div className="container">
      <div className="profile-navbar-container">
        <div className="user-profile-container">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="user-profile-picture"
          />
          <h1></h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Explore</li> <li>Messages</li> <li>Profile</li> <li>More</li>
          </ul>
        </nav>
      </div>

      <div className="main-section-container">
        <div>
          <h1>home</h1>
        </div>
        <div>
          <PostCreator />
          <Posts />
        </div>
      </div>
      <div className="side-bar-container">
        <div>
          <input type="text" placeholder="Search.." name="search" />
        </div>
      </div>
    </div>
  );
}

export default UserHomepage;
