import { useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseTracker from "./ExpenseTracker/components/ExpenseTrackerOld";
import Form from "./components/Form";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 0,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 1,
      description: "Eggs",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Gas",
      amount: 200,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Water",
      amount: 90,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Movies",
      amount: 15,
      category: "Entertainment",
    },
    {
      id: 5,
      description: "Games",
      amount: 70,
      category: "Entertainment",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenses([...expenses.filter((x) => x.id !== id)]);
  };

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={handleDelete}></ExpenseList>
    </>
  );
}

export default App;
