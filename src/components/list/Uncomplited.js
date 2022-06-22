import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removetodos, updatetodos } from "./../redux/todoAction";
import Chip from "@mui/material/Chip";
import "./../LishtComponent.css";


function Uncomplited() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (state.filter((data)=>data.isCompleted!==true).map((data) => (
    <li
      key={data.Time}
      className={data?.isCompleted ? "completed" : "uncompleted"}
    >
      {<span> </span>}
      {
        <Chip
          label={data.Todo}
          variant="outlined"
          onClick={() => dispatch(updatetodos(data.Time))}
          onDelete={() => {
            dispatch(removetodos(data.Time));
          }}
        />
      }
    </li>
  )));
}

export default Uncomplited;
