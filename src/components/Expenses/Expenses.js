import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={"expenses"}>
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
