import "./App.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addtodos, removetodos } from "./components/redux/todoAction";
import LishtComponent from "./components/LishtComponent";
import React, { useRef, useState } from "react";


function App() {
  const inputRef = useRef();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("Input =========");
  const [status , setStatus] = useState('all');

  return (
    <>
      <div></div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              addtodos({
                Todo: inputRef.current.value,
                Time: Math.random() * 5,
                Status: true,
              })
            );
          }}
        >
          <label htmlFor="todo">Enter Todo </label>
          <input type="text" id="todo" ref={inputRef}></input>
        </form>
        <button onClick={()=>setStatus("all")}> Display All</button>
        <button onClick={()=>setStatus("complited")}>Complited</button>
        <button  onClick={()=>setStatus("uncomplited")}>uncompleted</button>
      </div>
      <LishtComponent status={status}/>
    </>
  );
}

export default App;
