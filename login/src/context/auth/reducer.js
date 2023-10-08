import { LOGIN, LOGOUT } from "./actions";
import { authInitialState } from "./initial-state";

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("token", action.payload.token);
            return {
                // ...state, normalde birden fazla state varsa, yalnizca biri veya bir kaci guncellenecek ama hepsi guncellenmeyecekse, yazilmasi gerekir.
                user: action.payload,
                isAuthenticated: true,
            };
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                // ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
