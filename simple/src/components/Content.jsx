import React, { useContext, useState } from "react";
import CurrencyContext from "../store/store";

const Content = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("USD");
    const store = useContext(CurrencyContext);
    const { currencies } = store;

    const handleChange = (event) => {
        if (event.target.name === "amount") {
            setAmount(event.target.value);
        } else if (event.target.name === "currency") {
            setCurrency(event.target.value);
        }
    };

    const result = amount ? (amount / currencies[currency]).toFixed(2) : 0;

    return (
        <div>
            <form>
                <input
                    type="number"
                    name="amount"
                    placeholder="Enter the amount"
                    value={amount}
                    onChange={handleChange}
                />
                <select
                    name="currency"
                    value={currency}
                    onChange={handleChange}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <p>RESULT: {result} ₺ </p>
            </form>
        </div>
    );
};

export default Content;
