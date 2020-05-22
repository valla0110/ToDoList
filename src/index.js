import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <p>Hello Human</p>
    <ToDoList />
  </div>,
  destination
);
