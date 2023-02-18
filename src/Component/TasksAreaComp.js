import { useBacklogContext, useDoneContext, useOngoingContext, useTodoContext } from "../Context/TaskContext";
import { TaskGroupComp } from "./TaskGroupComp";

export default function TaskAreaComp() {
  const backlogContext = useBacklogContext();
  const todoContext = useTodoContext();
  const ongoingContext = useOngoingContext();
  const doneContext = useDoneContext();

  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <TaskGroupComp tasks={backlogContext.tasks} group="backlog" groupTitle={"Backlog"} />
        </div>
        <div class="col">
          <TaskGroupComp tasks={todoContext.tasks} group="todo" groupTitle={"To Do"} />
        </div>
        <div class="col">
          <TaskGroupComp tasks={ongoingContext.tasks} group="ongoing" groupTitle={"Ongoing"} />
        </div>
        <div class="col">
          <TaskGroupComp tasks={doneContext.tasks} group="done" groupTitle={"Done"} />
        </div>
      </div>
    </div>
  );
}
