import { TaskComp } from "./TaskComp";

export const TaskGroupComp = (props) => {
  const { groupTitle, tasks } = props;

  return (
    <div className="taskGroup">
      <h3>{groupTitle}</h3>
      {tasks.map((element) => (
        <TaskComp task={element} />
      ))}
    </div>
  );
};
