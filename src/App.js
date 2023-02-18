import "./App.css";
import TasksAreaComp from "./Component/TasksAreaComp";
import { ContextProvider } from "./Context/TaskContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <TasksAreaComp />
      </ContextProvider>
    </div>
  );
}

export default App;
