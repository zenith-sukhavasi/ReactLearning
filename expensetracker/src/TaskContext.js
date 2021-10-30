import { createContext, useState } from "react";

export const TaskContext = createContext()

export const Tasks  = (props) => {
    const [tasks,setTasks]=useState([
        {
            name : "petrol",
            price : -400,
            // expense:true
        },
        {
            name : "Food",
            price : -200,
            //expense:true
        },
        {
            name : "cash",
            price : 1000,
          //  expense:false
        }
    ])
    return ( 
        <TaskContext.Provider value={ [tasks,setTasks]}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
