import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JobList from "./JobList";




const TEST2 = () => {
    console.log("test2")
 const{id }=useParams()
    return (  
        <div className="test2">
            <h1>{id}</h1>
            <JobList></JobList>
        </div>
    );
}
 
export default TEST2;