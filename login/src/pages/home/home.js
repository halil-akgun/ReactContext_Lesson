import React, { useContext } from "react";
import "./home.scss";
import { AuthContext } from "../../context/store";
import { logout } from "../../context/auth/actions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const store = useContext(AuthContext);
    const navigate = useNavigate();

    const { authDispatch } = store;

    const handleLogout = () => {
        authDispatch(logout());
    };

    const goToLoginPage = () => {
        navigate("/login");
    };

    return (
        <>
            <div className="home-page__container">HOME PAGE</div>
            <button type="button" className="btnLogout" onClick={handleLogout}>LOGOUT</button>
            <button type="button" className="btnLoginPage" onClick={goToLoginPage}>GO BACK TO LOGIN</button>
            
        </>
    );
};

export default HomePage;
