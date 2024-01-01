import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";

const schema = z.object({
  id: z.number(),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 charactors." }),
  amount: z.number({ invalid_type_error: "Amount field is required." }),
  category: z.string().min(1, { message: "Category is required." }),
});

type formData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setExpenseArrayState([
      ...expenseArrayState,
      {
        id: data.id,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);

    reset();
  };

  //next page

  const expenseArray: formData[] = [
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
  ];
  const [expenseArrayState, setExpenseArrayState] =
    useState<formData[]>(expenseArray);

  const [filterCategory, setfilterCategory] = useState("");

  const handleDelete = (id: number, category: string) => {
    setExpenseArrayState([...expenseArrayState.filter((x) => x.id !== id)]);
  };

  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-control"
          >
            <option value=""></option>
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <div>
        <select
          id="category2"
          className="form-select form-control mb-3 "
          onChange={(event) => {
            setfilterCategory(event.target.value);
          }}
        >
          <option value="default">All categories</option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>

        <table className="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {filterCategory == "All categories" &&
              expenseArrayState.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>Delete</td>
                </tr>
              ))} */}
            {expenseArrayState
              .filter((x) => x.category === filterCategory)
              .map((expense, index, a) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(expense.id, expense.category)}
                      className="btn btn-danger "
                      defaultValue={index}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
