import axios from "axios";
import { useEffect, useState } from "react";
import  "./index.css"
import Loading from "./Loading";
import Tours from "./Tours";


function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const url = 'https://course-api.com/react-tours-project'
  const fetchData = () => {
    return axios
      .get(url)
      .then((res) => {
        setLoading(false);
        console.log(res)
        setTours(res.data)
        console.log(tours)
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const removeTour =(id)=>{
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours)
  }
 

  // const fetchTours = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch(url)
  //     const tours = await response.json()
  //     setLoading(false)
  //     setTours(tours)
  //     console.log(tours)
  //   } catch (error) {
  //     setLoading(false)
  //     console.log(error)
  //   }
  // }
    
  useEffect(()=>{
    fetchData();
    //fetchTours()
  },[])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='app'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (

    <div className="app">
     <h1>Our Tours</h1>
     <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
