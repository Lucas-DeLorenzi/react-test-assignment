import cross from "/Cross.svg";
import { joinClassNames } from "../utils/joinClassNames";
import { inputGroup } from "../types";

export default function InputGroup({
  errors,
  register,
  placeholder,
  type,
  errorMsg,
  inputClasses,
  inputName,
  registerValidation,
}: inputGroup) {
  return (
    <div className="input-group">
      <div
        className={`${errors ? "border-error" : ""} ${joinClassNames(
          inputClasses
        )}`}
      >
        <input
          className="inside-input"
          type={type}
          placeholder={placeholder}
          {...register(
            inputName,
            registerValidation ? registerValidation : undefined
          )}
        />
        <img
          className={`${errors ? "show-error" : "hide-error"} cross-icon`}
          src={cross}
        />
      </div>
      <div className={`${errors ? "show-error" : "hide-error"} error-msg`}>
        {errorMsg}
      </div>
    </div>
  );
}
