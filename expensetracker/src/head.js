import { useContext, useEffect, useState } from "react";
import Adder from "./Adder";
import { TaskContext } from "./TaskContext";



const Head = () => {
    const [tasks, setTasks] = useContext(TaskContext)
    var income = 0;
    var ex = 0;
    useEffect(() => {
        income = 0;
        ex = 0;
        tasks.forEach(e => {
            console.log(e)
            if (e.price >= 0) {
                income += e.price
            }
            else {
                ex += e.price
            }
        });
        console.log(income, ex)
    })

    return (
        <div className="head">
            <h1>Expense tracker</h1>
            <h2>Your Balance</h2>
            <div className="amount"><Adder tasks={tasks} v={1}></Adder></div>
            <div className="track">
                <div className="income">
                    <div className="inn">
                        <h3>Income</h3>
                        <div className="in">
                            <Adder tasks={tasks.filter((task) => task.price >= 0)} v={1}></Adder>
                        </div>
                    </div>
                </div>
                <div className="expense">
                    <h3>Expense</h3>
                    <div className="ex">
                        <Adder tasks={tasks.filter((task) => task.price < 0)} v={-1}></Adder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Head;