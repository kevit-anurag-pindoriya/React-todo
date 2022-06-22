import React from "react";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import { removetodos, updatetodos } from "./redux/todoAction";
// import Chip from "@mui/material/Chip";
// import "./LishtComponent.css";
// import { Button } from "@mui/material";
import All from "./list/All";
import Complited from "./list/Complited";
import Uncomplited from "./list/Uncomplited";

function LishtComponent(props) {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // console.log(state);
  // console.log(props.status);
  return <ul class="flow">{props.status==='all' && <All></All>}{props.status==='complited' && <Complited></Complited>}{props.status==='uncomplited' && <Uncomplited></Uncomplited>}</ul>;
}

export default LishtComponent;
