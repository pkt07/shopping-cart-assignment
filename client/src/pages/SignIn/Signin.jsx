import {
  LoginContainer,
  TextContent,
  Form,
  FormInput,
  LoginButton,
} from "./Signin.styled";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignIn = () => {
  const showToast = () => {
    toast.success("Log in Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    if (!password) {
      isValid = false;
      setPasswordError("Password is required");
      passwordRef.current.focus();
    } else if (
      password.length < 6 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password) ||
      /\s/.test(password)
    ) {
      isValid = false;
      setPasswordError(
        "Password must be at least 6 characters long and contain a number, alphabet, and cannot have spaces"
      );
      passwordRef.current.focus();
    }
    if (!email) {
      isValid = false;
      setEmailError("Email is required");
      emailRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      setEmailError("Email is invalid");
      emailRef.current.focus();
    }
    if (isValid) {
      showToast();
      navigate("/");
    }
  };
  return (
    <>
      <LoginContainer>
        <ToastContainer />
        <TextContent>
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </TextContent>
        <Form onSubmit={handleSubmit}>
          <FormInput>
            <label htmlFor="email">
              Email<span aria-hidden="true">*</span>
            </label>
            <input
              required="true"
              type="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={() =>
                setTimeout(() => {
                  !email
                    ? setEmailError("Email is required")
                    : !/\S+@\S+\.\S+/.test(email)
                    ? setEmailError("Email is invalid")
                    : setEmailError("");
                }, 100)
              }
            />
            {emailError && (
              <div role="alert" className="error-msg">
                <small id="emailError">{emailError}</small>
              </div>
            )}
          </FormInput>
          <FormInput>
            <label htmlFor="password">
              Password<span aria-hidden="true">*</span>
            </label>
            <input
              required="true"
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              onBlur={() =>
                setTimeout(() => {
                  !password
                    ? setPasswordError("Password is required")
                    : password.length < 6 ||
                      !/\d/.test(password) ||
                      !/[a-zA-Z]/.test(password) ||
                      /\s/.test(password)
                    ? setPasswordError(
                        "Password must be at least 6 characters long and contain a number, alphabet, and cannot have spaces"
                      )
                    : setPasswordError("");
                }, 100)
              }
            />
            {passwordError && (
              <div role="alert" className="error-msg">
                <small>{passwordError}</small>
              </div>
            )}
          </FormInput>
          <LoginButton type="submit">Login</LoginButton>
        </Form>
      </LoginContainer>
    </>
  );
};
export default SignIn;
