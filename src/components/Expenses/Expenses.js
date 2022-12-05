import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const items = props.items;
  return (
    <Card className="expenses">
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
