import icon from "/Logout.svg";
import { profileProps } from "../types";
import avatar from "/avatar.jpeg";

function Profile({ currentUser, setUser }: profileProps) {
  return (
    <div className="screen-container profile">
      <img src={avatar} className="avatar-img" />
      <h2 className="greet-user">{`That's it, ${currentUser.data.name}!`} </h2>
      <button
        className="btn logout-btn"
        onClick={() => {
          setUser(null);
        }}
      >
        <img src={icon} />
        Logout
      </button>
    </div>
  );
}

export default Profile;
