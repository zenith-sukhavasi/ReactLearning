import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Test from "./Comp";
import { getPost, getPosts, modifyUser } from "./redux/Slices/users";


function App() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const [id,setId]=useState(1)
  console.log(user);
  return (
    <div className="App">
      <h1>{user.Firstname}</h1>
      <input type="text" value={user.Lastname} onChange={(e) => dispatch(modifyUser({Lastname:e.target.value}))} />
      <button onClick={() => dispatch(getPosts())}>Get posts</button>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => dispatch(getPost(id))}>Get post</button>
      <Test></Test>
    </div>
  );
}

export default App;
