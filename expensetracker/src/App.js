import AddNew from "./AddNew";
import Head from "./head";
import History from "./History";
import { Tasks } from "./TaskContext";


function App() {
  return (
    <div className="App">
      <Tasks>
      <Head></Head>
      <History></History>
      <AddNew></AddNew>
      </Tasks>
    </div>
  );
}

export default App;
