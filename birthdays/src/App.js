import { useState } from "react";
import Blist from "./Blist";
import Data from "./Data";


function App() {
  const[data,setData]=useState(Data)
  console.log(typeof(Data))
  return (
    <div className="App">
      <h2>{data.length} birthday's today</h2>
      <Blist data={data}></Blist>
    </div>
  );
}

export default App;
