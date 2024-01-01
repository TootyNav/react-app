import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
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
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  const expenseArray: formData[] = [
    {
      description: "Milk",
      amount: 2,
      category: "Groceries",
    },
  ];
  const [expenseArrayState, setExpenseArrayState] =
    useState<formData[]>(expenseArray);

  console.log(expenseArrayState);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenseArrayState.map((expense, index) => (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
