import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/index";
import uuid from "react-uuid";
import { Constants } from "../Constant/Constant";

export default function AddTakComp() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    // handle userContext
    dispatch(addTask({ id: uuid(), taskName: inputValue, groupName: Constants.group_backlog }));
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
