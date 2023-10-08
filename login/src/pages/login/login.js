import React, { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/store";
import { login, logout } from "../../context/auth/actions";

const API_URL = process.env.REACT_APP_USERS_BASE_URL;

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const { authDispatch, authState } = useContext(AuthContext);

    if (token && authState.isAuthenticated && authState.user) {
        return <Navigate to="/" />;
    }

    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    // rshawe2
    // OWsTbMUgFc

    const userLogin = async (values) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const user = await response.json();
            console.log(user);
            authDispatch(login(user));
            localStorage.setItem("token", user.token);
            navigate("/");
        } catch (error) {
            console.log(error);
            authDispatch(logout());
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        userLogin(formData);
    };

    return (
        <div className="login-page__container">
            <div className="left-container"></div>
            <div className="right-container">
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="right-container__box">
                    <div className="right-container-box">
                        <h2 className="right-container__h2">
                            Nice to see you!
                        </h2>
                        <p className="right-container__p">
                            Enter your email and password to sign in
                        </p>
                    </div>
                    <div className="input-container">
                        <label
                            htmlFor="username"
                            className="right-container__label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="right-container__input"
                            name="username"
                            placeholder="Please enter your username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="password"
                            className="right-container__label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="right-container__input"
                            name="password"
                            placeholder="Your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn">
                        SIGN IN
                    </button>
                    <p className="right-container__bottom-text">
                        Don't have an account? <strong>Sign Up</strong>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
