import LoginForm from "../components/LoginForm";
import { props } from "../types";

function Login({ setUser }: props) {
  return (
    <div className="screen-container">
      <h2>Welcome, Stranger!</h2>
      <p>Please log in to this form if you wish to pass the exam.</p>
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default Login;
