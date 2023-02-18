import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function AddTakComp() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSaveClick = () => {

        // handle userContext
        console.log('Input value:', inputValue);
    }

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
                Add new task
            </InputGroup.Text>
            <FormControl
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="basic-addon2"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button variant="primary" id="basic-addon2" onClick={handleSaveClick}>Add</Button>
        </InputGroup>
    );
}