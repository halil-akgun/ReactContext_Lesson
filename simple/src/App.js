import React, { useEffect, useState } from "react";
import Exchange from "./components/Exchange";
import CurrencyContext from "./store/store";

const API_URL = process.env.REACT_APP_CURRENCY_API_URL;

const App = () => {
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        fetch(`${API_URL}/latest?from=try`)
            .then((response) => response.json())
            .then((data) => setCurrencies(data.rates))
            .catch((error) => console.log(error))
            .finally(() => console.log("verileri almaya gittik geldik.."));
    }, []);

    return (
        <CurrencyContext.Provider value={{ currencies }}>
            <Exchange />
        </CurrencyContext.Provider>
    );
};

export default App;
