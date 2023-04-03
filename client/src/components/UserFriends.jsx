import React from 'react'
import "../styles/UserFriends.scss";

function UserFriends(props) {

return (
  <div className="userfriends-container">
  <h1 >{props.username}</h1>
</div>
)
}

export default UserFriends;
