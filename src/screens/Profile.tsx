import icon from "/Logout.svg";
import "./screens.css";
import { profileProps } from "../types";
import avatar from "/avatar.jpeg";
import { joinClassNames } from "../utils/joinClassNames";

function Profile({ currentUser, setUser }: profileProps) {
  const containerClasses = ["screen-container", "profile"];
  const buttonClasses = ["button", "logout-button"];

  return (
    <div className={joinClassNames(containerClasses)}>
      <img src={avatar} className="avatar-image" />
      <h2 className="greet-user">{`That's it, ${currentUser.data.name}!`} </h2>
      <button
        className={joinClassNames(buttonClasses)}
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
