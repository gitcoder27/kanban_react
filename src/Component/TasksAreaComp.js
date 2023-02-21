import { TaskGroupComp } from "./TaskGroupComp";
import { Constants } from "../Constant/Constant";

export default function TaskAreaComp() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <TaskGroupComp groupTitle={Constants.group_backlog} />
        </div>
        <div class="col">
          <TaskGroupComp groupTitle={Constants.group_todo} />
        </div>
        <div class="col">
          <TaskGroupComp groupTitle={Constants.group_ongoing} />
        </div>
        <div class="col">
          <TaskGroupComp groupTitle={Constants.group_done} />
        </div>
      </div>
    </div>
  );
}
