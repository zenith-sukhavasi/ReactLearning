
import MAIN from "./MAIN";
import { QuestionProvider } from "./QuestionContext";



function App() {
  return (
    <div className="App">
      <QuestionProvider>
      <MAIN></MAIN>
      </QuestionProvider>
    </div>
  );
}

export default App;
