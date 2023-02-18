import "./App.css";
import TaskController from "./Component/TaskControllerComp";
import TasksAreaComp from "./Component/TasksAreaComp";
import { ContextProvider } from "./Context/TaskContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <TaskController />
        <TasksAreaComp />
      </ContextProvider>
    </div>
  );
}

export default App;
