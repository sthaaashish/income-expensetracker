import React from "react";
import "./Transaction.css";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transactionlist">
      <p>Transactions</p>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.category === "income" ? "income" : "expense"}
          >
            <span className="date">{transaction.date}</span>
            <span>{transaction.text}</span>
            <span className="amount">
              Rs
              {transaction.category === "expense" && "-"}
              {transaction.amount}
            </span>
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
