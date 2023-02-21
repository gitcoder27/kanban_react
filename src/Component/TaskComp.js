import { useDispatch } from "react-redux";
import { selectedTask } from "../actions/index";

export const TaskComp = (props) => {
  const dispatch = useDispatch();

  const taskHandler = () => {
    console.log("i'm here");
    dispatch(selectedTask(props.task.id));
  };

  return (
    <div className="task" onClick={taskHandler}>
      <h3>{props.task.taskName}</h3>
    </div>
  );
};
