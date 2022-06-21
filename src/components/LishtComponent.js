import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removetodos } from "./redux/todoAction";
import { togal } from "./redux/todoAction";
import Chip from "@mui/material/Chip";
import  "./LishtComponent.css";

import { Button } from "@mui/material";

function LishtComponent() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <ul>
      {state.map((data) => (
        <li key={data.Time} id={data.Time} className="uncompleted">
          {<span> </span>}
          {
            <Chip
              label={data.Todo}
              variant="outlined"
              // onClick={dispatch(togal(data.Time))}
              onDelete={() => {
                dispatch(removetodos(data.Time));
              }}
            />
          }
        </li>
        
      ))}
    </ul>
  );
}

export default LishtComponent;
