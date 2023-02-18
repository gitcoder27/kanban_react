import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function UpdateTaskComp() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMoveForwardClick = () => {
    // handle userContext
    console.log("Input value:", inputValue);
  };

  const handleMoveBackwardClick = () => {
    // handle userContext
    console.log("Input value:", inputValue);
  };

  const handleDeleteClick = () => {
    // handle userContext
    console.log("Input value:", inputValue);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Selected Task"
        aria-label="Enter text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={true}
      />

      <Button variant="primary" onClick={handleMoveForwardClick}>
        move forward
      </Button>
      <Button variant="primary" onClick={handleMoveBackwardClick}>
        move backward
      </Button>
      <Button variant="primary" onClick={handleDeleteClick}>
        delete
      </Button>
    </InputGroup>
  );
}
