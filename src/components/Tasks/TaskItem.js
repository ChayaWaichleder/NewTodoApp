import React, { useState } from "react";

import TaskDate from "./TaskDate";
import Card from "../UI/Card";
import "./TaskItem.css"

const TaskItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("TaskItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="task-item">
      <TaskDate date={props.date} />
      <div className="task-item__description">
        <h2>{title}</h2>
        <div className="task-item__status">${props.taskStatus}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default TaskItem;
