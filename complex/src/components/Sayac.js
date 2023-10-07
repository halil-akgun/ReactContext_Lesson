import React, { useContext } from "react";
import { StoreContext } from "../context/store";
import { decrement, increment, reset } from "../context/counter/actions";

const Sayac = () => {
    const store = useContext(StoreContext);
    console.log(store);
    const { counterState, dispatchCounter } = store;

    const handleCounter = (type) => {
        if (type === "+") {
            dispatchCounter(increment());
        } else if (type === "-") {
            dispatchCounter(decrement());
        } else if (type === "sifirla") {
            dispatchCounter(reset());
        }
    };

    return (
        <div>
            <h1>Sayac</h1>
            <h3>{counterState.counter}</h3>
            <button onClick={() => handleCounter("+")}>ARTIR</button>
            <button onClick={() => handleCounter("-")}>AZALT</button>
            <button onClick={() => handleCounter("sifirla")}>SIFIRLA</button>
        </div>
    );
};

export default Sayac;
