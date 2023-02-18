import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useBacklogContext } from "../Context/TaskContext";

export default function AddTakComp() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const backlogContext = useBacklogContext();

  const handleSaveClick = () => {
    // handle userContext
    backlogContext.setter([...backlogContext.tasks, inputValue]);
    setInputValue("");
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="New Task Name"
        aria-label="Enter text"
        aria-describedby="basic-addon2"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button variant="primary" id="basic-addon2" onClick={handleSaveClick}>
        Add
      </Button>
    </InputGroup>
  );
}
