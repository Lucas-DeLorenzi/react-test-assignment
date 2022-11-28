import { useState } from "react";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import logo from "/Mercury-logotype.png";
import { user } from "./types";

function App() {
  const [user, setUser] = useState<user['data']>(null);

  return (
    <div className="main-container">
      <img src={logo} className="logo" />
      {user ? <Profile currentUser={user} setUser={setUser}/> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
