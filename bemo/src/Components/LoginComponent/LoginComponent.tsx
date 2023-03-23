import React from 'react';
import { useState } from 'react';
import useCustomHttp from '../../CustomHooks/useCustomHttp'
import globalStyles from '../../GlobalStyles/GlobalStyles.module.css'
import { useNavigate } from "react-router-dom";
import styles from './Styles/LoginStyles.module.css'

interface LoginCredentials {
    email: string;
    password: string;    
}

const LoginComponent = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const http = useCustomHttp();

    const handleValidation = (e : React.FormEvent<HTMLFormElement>) => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setEmailError("Email Not Valid");
            return false;
        } else {
            setEmailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setPasswordError(
                "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
            );
            return false;
        } else {
            setPasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e : any) => {
        e.preventDefault();
        handleValidation(e);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.content}>
                    <h3 className={styles.title}>Sign In</h3>
                    <div>
                        Not registered yet?{" "}
                        <span className={styles.link} onClick={() => navigate("/signup")}>
                        Sign Up
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="form-group mt-4" style={{display:"flex", justifyContent:"center"}}>
                        <button type="submit" className={globalStyles.activeButton} onClick={(e) => loginSubmit(e)}>
                        Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent;