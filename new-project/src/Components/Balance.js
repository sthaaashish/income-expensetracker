import React from "react";
import "./Balance.css";

const Balance = ({ transactions }) => {
  const balance = transactions.reduce((total, transaction) => {
    if (transaction.category === "income") {
      return total + transaction.amount;
    } else if (transaction.category === "expense") {
      return total - transaction.amount;
    }
    return total;
  }, 0);
  const income = transactions
    .filter((transaction) => transaction.category === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);
  const expense = transactions
    .filter((transaction) => transaction.category === "expense")
    .reduce((total, transaction) => total - transaction.amount, 0);

  return (
    <div className="balance">
      <p>Balance Rs: {balance}</p>
      <p> Total income:{income} </p>
      <p> Total expense:{expense}</p>
    </div>
  );
};

export default Balance;

