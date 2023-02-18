import AddTakComp from "./AddTaskComp";
import UpdateTaskComp from "./UpdateTaskComp";

export default function TaskController() {
  return (
    <div className="task-controller" style={{ backgroundColor: "blue" }}>
      <AddTakComp />
      <UpdateTaskComp />
    </div>
  );
}
