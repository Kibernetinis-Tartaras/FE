import React from "react";
import { useState } from "react";
import useCustomHttp from "../../CustomHooks/useCustomHttp";
import globalStyles from "../../GlobalStyles/GlobalStyles.module.css";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/SignupStyles.module.css";
import { Form, FormGroup } from "react-bootstrap";

interface SignupCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupComponent = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(true);
  const http = useCustomHttp();

  const handleValidation = () => {
    let formValid = true;

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      formValid = false;
      setEmailError("Email not valid");
    } else {
      setEmailError("");
    }

    if (firstName.length < 1) {
      formValid = false;
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }

    if (lastName.length < 1) {
      formValid = false;
      setLastNameError("Last name cannot be empty");
    } else {
      setLastNameError("");
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

  return (
    <div className={styles.container}>
      <Form
        className={formIsValid ? styles.formValid : styles.formNotValid}
        onSubmit={loginSubmit}
      >
        <Form.Group className={styles.content}>
          <h3 className={styles.title}>Sign Up</h3>
          <FormGroup>
            Registered already?{" "}
            <Form.Label
              className={styles.link}
              onClick={() => navigate("/login")}
            >
              Sign In
            </Form.Label>
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              className="mt-1"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {nameError && (
              <Form.Text className="text-danger">{nameError}</Form.Text>
            )}
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              className="mt-1"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && (
              <Form.Text className="text-danger">{lastNameError}</Form.Text>
            )}
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
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignupComponent;
