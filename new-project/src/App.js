import React, { useState } from "react";
import TransactionList from "./Components/Transaction";
import Balance from "./Components/Balance";
import AddTransaction from "./Components/AddTransaction";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (text, amount, date, category) => {
    const newTransaction = {
      id: Math.random(),
      text,
      amount: +amount,
      date,
      category,
    };

    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(updatedTransactions);
  };

  return (
    <div className="incomeandexpense">
      <header>Income and Expense Tracker</header>
      <Balance transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
