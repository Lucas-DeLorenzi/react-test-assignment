import icon from "/Arrow.svg";
import cross from "/Cross.svg";
import loadingIcon from "/loader.svg";
import { useForm } from "react-hook-form";
import { credentials, props } from "../types";
import { login } from "../api";
import { useState } from "react";

function LoginForm({ setUser }: props) {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<credentials>({ mode: "all" });

  const onSubmit = (formValues: credentials) => {
    setLoading(true);
    login(formValues)
      .then((response) => {
        if (response.status === 401) {
          setUser(null);
          return;
        }
        setUser(response);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <div
            className={`${
              errors.email ? "border-error" : ""
            } custom-input validate-input`}
          >
            <input
              className="inside-input"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^\w+@\w+\.[a-zA-Z]+/,
              })}
            />
            <img
              className={`${
                errors.email ? "show-error" : "hide-error"
              } cross-icon`}
              src={cross}
            />
          </div>
          <div
            className={`${
              errors.email ? "show-error" : "hide-error"
            } error-msg`}
          >
            {"Incorrect email"}
          </div>
        </div>
        <input
          className="custom-input input-field"
          type="text"
          placeholder="Password"
          {...register("password")}
        />
        {loading ? (
          <button className="btn loading-btn">
            <img className="loader" src={loadingIcon} />
          </button>
        ) : (
          <button className="btn">
            Login
            <img src={icon} />
          </button>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
