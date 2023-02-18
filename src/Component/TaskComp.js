import { useSelectedTaskContext } from '../Context/TaskContext';

export const TaskComp = (props) => {
  const a = useSelectedTaskContext()

  const taskClickHandler = () => a.setter({ taskName: props.task, group: props.group });

  return (
    <div className="task" onClick={taskClickHandler}>
      <h3>{props.task}</h3>
    </div >
  );
};
