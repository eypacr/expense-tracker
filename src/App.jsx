import { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import IncomeExpense from "./components/IncomeExpense";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const localStorageTransactions = JSON.parse(
      localStorage.getItem("transactions")
    );
    if (localStorageTransactions) {
      setTransactions(localStorageTransactions);
    }
  }, []);

  const addTransaction = (e) => {
    e.preventDefault();

    if (text.trim() === "" || amount.trim() === "") {
      alert("Lütfen bir açıklama ve tutar ekleyin.");
    } else {
      const newTransaction = {
        id: generateID(),
        text,
        amount: +amount,
      };

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);

      updateLocalStorage(updatedTransactions);

      setText("");
      setAmount("");
    }
  };

  const generateID = () => {
    return Math.floor(Math.random() * 100000000);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
    updateLocalStorage(updatedTransactions);
  };

  const updateLocalStorage = (updatedTransactions) => {
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  let balanceClass = "balance-neutral";
  if (total > 0) balanceClass = "balance-positive";
  else if (total < 0) balanceClass = "balance-negative";

  return (
    <div className="container">
      <h1>Gider Takip Uygulaması</h1>
      <br />
      <h4>Bakiyeniz</h4>
      <br />
      <h1 className={balanceClass}>{total} ₺</h1>

      <IncomeExpense income={income} expense={expense} />
      <TransactionList
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
      <TransactionForm
        addTransaction={addTransaction}
        text={text}
        setText={setText}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
}

export default App;
