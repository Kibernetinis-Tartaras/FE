import React from "react";
import { useState } from "react";
import useCustomHttp from "../../CustomHooks/useCustomHttp";
import globalStyles from "../../GlobalStyles/GlobalStyles.module.css";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/LoginStyles.module.css";
import { Form, FormGroup } from "react-bootstrap";

interface LoginCredentials {
  email: string;
  password: string;
}

const LoginComponent = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(true);
  const http = useCustomHttp();
  const redirectUrl = "http://localhost:3000/redirect";
  const scope = "read"

  const handleValidation = () => {
    let formValid = true;

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      formValid = false;
      setEmailError("Email not valid");
    } else {
      setEmailError("");
    }

    if (
      !password.match(
        /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{4,}$/
      ) ||
      password.length < 8
    ) {
      formValid = false;
      setPasswordError(
        "Password must be at least 8 characters and include an uppercase, lowercase letter, digit and special character."
      );
    } else {
      setPasswordError("");
    }

    return formValid;
  };

  const loginSubmit = (e: any) => {
    e.preventDefault();
    setFormIsValid(handleValidation());
  };

  const handleLoginStrava = (e: any) => {
    e.preventDefault();
    const win: Window = window;
    win.location = `https://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=https://localhost:3000/&response_type=code&scope=activity:read`;
  };

  return (
    <div className={styles.container}>
      <Form
        className={formIsValid ? styles.formValid : styles.formNotValid}
        onSubmit={loginSubmit}
      >
        <Form.Group className={styles.content}>
          <h3 className={styles.title}>Sign In</h3>
          <FormGroup>
            Not registered yet?{" "}
            <Form.Label
              className={styles.link}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Form.Label>
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <Form.Text className="text-danger">{emailError}</Form.Text>
            )}
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            )}
          </FormGroup>
          <FormGroup
            className="mt-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button type="submit" className={globalStyles.activeButton}>
              Submit
            </button>
          </FormGroup>
          <FormGroup
            className="mt-6"
            style={{ display: "flex", justifyContent: "flex-start", marginTop:"5vh"}}
          >
            <button className={globalStyles.activeButton} onClick={(e) => handleLoginStrava(e)}>
              Log in with Strava
            </button>
          </FormGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginComponent;
