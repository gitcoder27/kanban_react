import "./App.css";
import { TaskGroupComp } from "./Component/TaskGroupComp";

function App() {
  const tasks = ["task1", "task2"];

  return (
    <div className="App">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <TaskGroupComp tasks={tasks} groupTitle={"Backlog"} />
          </div>
          <div class="col">
            <TaskGroupComp tasks={tasks} groupTitle={"To Do"} />
          </div>
          <div class="col">
            <TaskGroupComp tasks={tasks} groupTitle={"Ongoing"} />
          </div>
          <div class="col">
            <TaskGroupComp tasks={tasks} groupTitle={"Done"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
