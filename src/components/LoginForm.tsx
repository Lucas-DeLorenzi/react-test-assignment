import icon from "/Arrow.svg";
import loadingIcon from "/loader.svg";
import { useForm } from "react-hook-form";
import { credentials, props } from "../types";
import { login } from "../api";
import { useState } from "react";
import { joinClassNames } from "../utils/joinClassNames";
import InputGroup from "./InputGroup";

function LoginForm({ setUser }: props) {
  const inputClasses = ["custom-input", "validate-input"];
  const buttonClasses = ["button", "loading-button"];
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<credentials>({ mode: "all" });

  const onSubmit = (formValues: credentials) => {
    setIsLoading(true);
    login(formValues)
      .then((response) => {
        if (response.status === 401) {
          setUser(null);
          setError("email", { type: "custom", message: "Invalid credentials" });
          setError("password", {
            type: "custom",
            message: "Invalid credentials",
          });
          return;
        }
        setUser(response);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          errors={errors.email}
          register={register}
          placeholder="Email"
          type="text"
          errorMessage="Incorrect email"
          inputClasses={inputClasses}
          inputName="email"
          registerValidation={{
            required: true,
            pattern: /^\w+@\w+\.[a-zA-Z]+/,
          }}
        />
        <InputGroup
          errors={errors.password}
          register={register}
          placeholder="Password"
          type="password"
          errorMessage="Incorrect password"
          inputClasses={inputClasses}
          inputName="password"
          registerValidation={null}
        />
        {isLoading ? (
          <button className={joinClassNames(buttonClasses)}>
            <img className="loader" src={loadingIcon} />
          </button>
        ) : (
          <button className="button">
            Login
            <img src={icon} />
          </button>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
