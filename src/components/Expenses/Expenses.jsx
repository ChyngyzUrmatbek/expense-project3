import "./Expenses.css";
import { ExpenseItem } from "../expense-item/ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title + new Date().getTime()}
            title={elem.title}
            date={elem.date}
            price={elem.price}
          />
        );
      })}
    </ul>
  );
};
export default Expenses;
