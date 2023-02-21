import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, selectedTask, moveTask } from "../actions/index";

export default function UpdateTaskComp() {
  const dispatch = useDispatch();
  const selectedTaskId = useSelector((state) => state.selectedTask);
  const tasks = useSelector((state) => state.taskReducer);

  const handleMoveForwardClick = () => {
    dispatch(
      moveTask({
        id: selectedTaskId,
        movement: 1,
      })
    );
  };

  const handleMoveBackwardClick = () => {
    dispatch(
      moveTask({
        id: selectedTaskId,
        movement: -1,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(selectedTaskId));
    dispatch(selectedTask(""));
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Selected Task"
        aria-label="Enter text"
        value={tasks[selectedTaskId]?.taskName || ""}
        disabled={true}
      />

      <Button variant="primary" onClick={handleMoveForwardClick} disabled={tasks[selectedTaskId]?.groupName === "done"}>
        move forward
      </Button>
      <Button
        variant="primary"
        onClick={handleMoveBackwardClick}
        disabled={tasks[selectedTaskId]?.groupName === "backlog"}
      >
        move backward
      </Button>
      <Button variant="primary" onClick={handleDeleteClick}>
        delete
      </Button>
    </InputGroup>
  );
}
