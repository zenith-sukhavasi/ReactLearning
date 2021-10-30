import { useContext,useState } from "react";
import { TaskContext } from "./TaskContext";



const AddNew = () => {
    const [tasks,setTasks]=useContext(TaskContext)
    const[name,setName]=useState("")
    const[price,setPrice]=useState(0)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTasks(prev=>[...prev,{name:name,price:price}])
        console.log(tasks)
    }
    return (
        <div className="add">
            <h2>Add New</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} required onChange={(e)=>{setName(e.target.value)}} />
                <input type="number" value={price} required onChange={(e)=>{setPrice(parseFloat(e.target.value))}} />
                <button onClick={()=>console.log(name,price)}>CLick</button>
            </form>
        </div>
      );
}
 
export default AddNew;
