import React, { useState, useContext } from "react";

const BacklogList = React.createContext();
const TodoList = React.createContext();
const OngoingList = React.createContext();
const DoneList = React.createContext();
const SelectedTask = React.createContext();

export const useBacklogContext = () => useContext(BacklogList);
export const useTodoContext = () => useContext(TodoList);
export const useOngoingContext = () => useContext(OngoingList);
export const useDoneContext = () => useContext(DoneList);
export const useSelectedTaskContext = () => useContext(SelectedTask);

export const ContextProvider = ({ children }) => {
  const [backlogList, setBacklogList] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [ongoingList, setOngoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [selectedTaskValue, setSelectedTaskValue] = useState({ taskName: "", group: "" });

  return (
    <BacklogList.Provider value={{ tasks: backlogList, setter: setBacklogList }}>
      <TodoList.Provider value={{ tasks: todoList, setter: setTodoList }}>
        <OngoingList.Provider value={{ tasks: ongoingList, setter: setOngoingList }}>
          <SelectedTask.Provider value={{ task: selectedTaskValue, setter: setSelectedTaskValue }}>
            <DoneList.Provider value={{ tasks: doneList, setter: setDoneList }}>{children}</DoneList.Provider>
          </SelectedTask.Provider>
        </OngoingList.Provider>
      </TodoList.Provider>
    </BacklogList.Provider>
  );
};
