import { credentials, loginResponse } from "../types";

export function login({
  email,
  password,
}: credentials): Promise<loginResponse["success"] | loginResponse["error"]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "elon@mercdev.com" && password === "twitter") {
        resolve({
          status: 200,
          data: { avatar: "/avatar.jpeg", name: "Elon" },
          error: "",
        });
      } else {
        resolve({
          status: 401,
          data: {},
          error: "Incorrect email or password",
        });
      }
    }, 1000);
  });
}
