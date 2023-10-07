import React, { useContext } from "react";
import CurrencyContext from "../store/store";

const defaultCurrency = "USD";

const TopBar = () => {
    const store = useContext(CurrencyContext);
    const { currencies } = store;

    const formatCurrency = (currency) => {
        const result = currencies
            ? (1 / currencies[currency ?? defaultCurrency]).toFixed(4)
            : 0;
        return result;
    };

    const styles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "aqua",
        padding: "10px",
    };

    const styles2 = {
        display: "flex",
        gap: "10px",
    };

    return (
        <header>
            <nav style={styles}>
                <h3>Exchange</h3>
                <div style={styles2}>
                    <div>$: {formatCurrency("USD")}</div>
                    <div>€: {formatCurrency("EUR")}</div>
                </div>
            </nav>
        </header>
    );
};

export default TopBar;
