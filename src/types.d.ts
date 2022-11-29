export interface credentials {
  email: string;
  password: string;
}

export interface loginRes {
  success: {
    status: number;
    data: { avatar: string; name: string };
    error: string;
  };
  error: { status: number; data: {}; error: string };
}

export interface user {
  data: { data: { avatar: string; name: string } } | null;
}

export interface props {
  setUser: React.Dispatch<
    React.SetStateAction<null | loginRes["data"] | loginRes["error"]>
  >;
}

export interface profileProps {
  setUser: props["setUser"];
  currentUser: { data: { avatar: string; name: string } };
}

export interface inputGroup {
  errors: Partial<
    FieldErrorsImpl<{
      email: string;
      password: string;
    }>
  >;
  register: UseFormRegister<credentials>;
  placeholder: string | undefined;
  type: string;
  errorMsg: string;
  inputClasses: Array<string>;
  inputName: string;
  registerValidation: object | null;
}
