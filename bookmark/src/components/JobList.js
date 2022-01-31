import axios from "axios";
import { useState,useEffect } from "react";
import Jobs from "./Jobs";



const JobList = () => {
    var url = " http://localhost:8000/Jobs"
    const [loading,setLoading]=useState(true)
    const [jobs,setJobs] = useState([])
    const fetchData = () => {
        return axios
          .get(url)
          .then((res) => {
           
            console.log(res)
            console.log(res.data)
            setJobs(res.data)
            console.log(jobs)
            // setTours(res.data)
            // console.log(tours)
             setLoading(false);
            return res;
          })
          .catch((err) => {
            console.error(err);
          });
      };
    
      useEffect(() => {
        fetchData()
      }, [url])
      if (loading) {
        return(
          <h1>Loading Job List</h1>
        )
      }
    return ( 
      
        <div className="joblist">
          <h2>hi</h2>
          {console.log(jobs)}
          <Jobs jobs={jobs}></Jobs>
        </div>
     );
}
 
export default JobList;
