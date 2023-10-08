import { createContext, useReducer } from "react";
import { authReducer } from "./auth/reducer";
import { authInitialState } from "./auth/initial-state";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
