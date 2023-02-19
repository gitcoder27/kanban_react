import { InputGroup, FormControl, Button } from "react-bootstrap";
import {
  useSelectedTaskContext,
  useBacklogContext,
  useTodoContext,
  useOngoingContext,
  useDoneContext,
} from "../Context/TaskContext";

export default function UpdateTaskComp() {
  const XuseSelectedTaskContext = useSelectedTaskContext();
  const XuseBacklogContext = useBacklogContext();
  const XuseTodoContext = useTodoContext();
  const XuseOngoingContext = useOngoingContext();
  const XuseDoneContext = useDoneContext();
  const taskName = XuseSelectedTaskContext.task.taskName;
  const groupName = XuseSelectedTaskContext.task.group;

  const groupPostionValue = {
    backlog: [XuseBacklogContext, XuseTodoContext],
    todo: [XuseTodoContext, XuseOngoingContext],
    ongoing: [XuseOngoingContext, XuseDoneContext],
    done: [XuseDoneContext, XuseBacklogContext],
  };

  const handleMoveForwardClick = () => {
    // add
    groupPostionValue[groupName][1].setter([...groupPostionValue[groupName][1].tasks, taskName]);

    // remove
    groupPostionValue[groupName][0].setter(groupPostionValue[groupName][0].tasks.filter((ele) => ele !== taskName));

    XuseSelectedTaskContext.setter({
      taskName: taskName,
      group: Object.keys(groupPostionValue)[Object.keys(groupPostionValue).indexOf(groupName) + 1],
    });
  };

  const handleMoveBackwardClick = () => {
    const group = Object.keys(groupPostionValue)[Object.keys(groupPostionValue).indexOf(groupName) - 1];
    // add
    groupPostionValue[group][0].setter([...groupPostionValue[group][0].tasks, taskName]);

    // remove
    groupPostionValue[group][1].setter(groupPostionValue[group][1].tasks.filter((ele) => ele !== taskName));

    XuseSelectedTaskContext.setter({
      taskName: taskName,
      group: group,
    });
  };

  const handleDeleteClick = () => {
    groupPostionValue[groupName][0].setter(groupPostionValue[groupName][0].tasks.filter((ele) => ele !== taskName));

    XuseSelectedTaskContext.setter({
      taskName: "",
      group: "",
    });
  };

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Selected Task" aria-label="Enter text" value={taskName} disabled={true} />

      <Button variant="primary" onClick={handleMoveForwardClick} disabled={groupName === "done"}>
        move forward
      </Button>
      <Button variant="primary" onClick={handleMoveBackwardClick} disabled={groupName === "backlog"}>
        move backward
      </Button>
      <Button variant="primary" onClick={handleDeleteClick}>
        delete
      </Button>
    </InputGroup>
  );
}
