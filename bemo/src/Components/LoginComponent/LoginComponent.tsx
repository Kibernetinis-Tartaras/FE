import React from "react";
import { useState } from "react";
import globalStyles from "../../GlobalStyles/GlobalStyles.module.css";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/LoginStyles.module.css";
import { Form, FormGroup } from "react-bootstrap";
import authService from "../../Services/authService";
import { LoginProps } from "../../Dto/LoginProps";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(true);

  const handleValidation = () => {
    let formValid = true;

    if (username.length < 1 || /\s/.test(username)) {
      formValid = false;
      setUsernameError("Username is not valid");
    } else {
      setUsernameError("");
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
    if (formIsValid) {
      let loginProps: LoginProps = {
          username: username,
          password: password
      };
      authService.login(loginProps)
      .then((data) => navigate("/main"))
      .catch((err) => setPasswordError("User does not exist!"));
    }
  };

  const handleLoginStrava = (e: any) => {
    e.preventDefault();
    const win: Window = window;
    win.location = `https://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/main&response_type=code&scope=activity:read`;
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
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className="mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <Form.Text className="text-danger">{usernameError}</Form.Text>
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
            style={{ display: "flex", justifyContent: "center", gap:"4vh"}}
          >
            <button type="submit" className={globalStyles.activeButton} style={{position:"relative"}}>
              Submit
            </button>
            <button className={globalStyles.activeButton} style={{position:"relative", backgroundColor:"#fc5200"}} onClick={(e) => handleLoginStrava(e)}>
              Strava login
            </button>
          </FormGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginComponent;
