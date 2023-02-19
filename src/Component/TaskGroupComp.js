import { TaskComp } from "./TaskComp";
import { useEffect } from "react";

export const TaskGroupComp = (props) => {
  const { groupTitle, tasks, group } = props;

  useEffect(() => {
    localStorage.setItem("group", tasks);
  });
  return (
    <div className="taskGroup">
      <h3>{groupTitle}</h3>
      {tasks.map((element) => (
        <TaskComp task={element} group={group} />
      ))}
    </div>
  );
};
