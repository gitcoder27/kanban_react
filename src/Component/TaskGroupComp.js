import { TaskComp } from "./TaskComp";
import { useSelector } from "react-redux";

export const TaskGroupComp = (props) => {
  const { groupTitle } = props;
  const group = [];
  const tasks = useSelector((state) => state.taskReducer);
  console.log("tasks", tasks);
  for (let i in tasks) {
    if (tasks[i].groupName === groupTitle) {
      group.push(tasks[i]);
    }
  }

  return (
    <div className="taskGroup">
      <h3>{groupTitle}</h3>
      {group.map((element) => (
        <TaskComp task={element} />
      ))}
    </div>
  );
};
