import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import "./Tasks.css";

const Tasks = (props) => {
  return (
    <Card className="tasks">
      <TaskItem
        title={props.items[0].title}
        date={props.items[0].date}
        taskStatus={props.items[0].taskStatus}
      />
      <TaskItem
        title={props.items[1].title}
        date={props.items[1].date}
        taskStatus={props.items[1].taskStatus}
      />
      <TaskItem
        title={props.items[2].title}
        date={props.items[2].date}
        taskStatus={props.items[2].taskStatus}
      />
      <TaskItem
        title={props.items[3].title}
        date={props.items[3].date}
        taskStatus={props.items[3].taskStatus}
      />
    </Card>
  );
};

export default Tasks;
