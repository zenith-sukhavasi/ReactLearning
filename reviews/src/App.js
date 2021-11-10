import Data  from "./DATA";
import Reviews from "./reviews";



console.log(Data);

function App() {
  return (
    <div className="App">
      
      <Reviews DATA={Data} ></Reviews>
    </div>
  );
}

export default App;
