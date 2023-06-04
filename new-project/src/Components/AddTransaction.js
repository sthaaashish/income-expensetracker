import React, { useState } from "react";
import "./addtransaction.css";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction(text, amount, date, category);

    setText("");
    setAmount("");
    setDate("");
    setCategory("");
  };
  const handleCategory = (items) => {
    setCategory(items);
  };

  return (
    <div className="inputs">
      <h4>Add Transaction</h4>
      <div className="inputfields">
        <form onSubmit={handleSubmit}>
          <div className="category">
            <button
              type="button"
              className={category === "income" ? "active" : ""}
              onClick={() => handleCategory("income")}
            >
              Income
            </button>
            <button
              type="button"
              className={category === "expense" ? "active" : ""}
              onClick={() => handleCategory("expense")}
            >
              Expense
            </button>
          </div>

          <input
            type="text"
            placeholder="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <input
            placeholder="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
