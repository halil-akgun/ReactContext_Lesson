import React, { useReducer } from "react";
import Home from "./pages/home/home";
import { StoreContext } from "./context/store";
import { counterInitialState } from "./context/counter/initial-state";
import { counterReducer } from "./context/counter/reducers";

const App = () => {
    const [counterState, dispatchCounter] = useReducer(
        counterReducer,
        counterInitialState
    );

    return (
        <StoreContext.Provider value={{ counterState, dispatchCounter }}>
            <Home />
        </StoreContext.Provider>
    );
};

export default App;
