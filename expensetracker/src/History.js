import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const History = () => {
    const  [tasks,setTasks] = useContext(TaskContext)
    // console.log(tasks)
    return ( 
        <div className="history">
            <h2>History </h2>
            {/* <div className="tasks">
                {tasks.map((task)=>{
                    (
                        <p>{task.name}</p>
                    )
                })}
                
            </div> */}
            {
                tasks && tasks.map((task)=>(      
                        <div className={ task.price>0?"green task":"red task" } >
                            <p>{task.name}</p>
                            <p>{task.price}</p>
                        </div>
                    
                 ) )
            }

        </div>
     );
}
 
export default History;