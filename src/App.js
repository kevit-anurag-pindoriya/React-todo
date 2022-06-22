import "./App.css";
import { useDispatch } from "react-redux/es/exports";
import { addtodos } from "./components/redux/todoAction";
import LishtComponent from "./components/LishtComponent";
import React, { useRef, useState } from "react";

function App() {
  const inputRef = useRef();

  const dispatch = useDispatch();
  console.log("Input =========");
  const [status, setStatus] = useState("all");

  return (
    <>
      <div></div>
      <div className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (inputRef.current.value.trim() === "") {
              return;
            }
            dispatch(
              addtodos({
                Todo: inputRef.current.value,
                Time: Math.random() * 5,
                Status: true,
              })
            );
            inputRef.current.value = "";
          }}
        >
          <div className="input">
            
            <input type="text" id="todo" placeholder="Enter Todo Here..." ref={inputRef}></input>
          </div>
        </form>
        
      </div>
      <div className="list"><LishtComponent status={status} /></div>
      <div className="button-div">
      <button className="button button-all" onClick={() => setStatus("all")}> Display All</button>
        <button className="button button-complited" onClick={() => setStatus("complited")}>Complited</button>
        <button className="button button-uncomplited" onClick={() => setStatus("uncomplited")}>uncompleted</button>
        </div>
    </>
  );
}

export default App;
