import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { TextField, Select, MenuItem } from '@mui/material';

const CreateToDo = () => {
    const [form, setForm] = useState({
        task: "",
        priority: "Choose Priority"
    })

    // const handleChange = (e) => {
        
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     dispatch(addToDo(state, currentUser))
    // }
    return (
        <div style={{padding: "200px"}}>
            <form>
                <TextField name="task" id="task" label="Task" value={form.task}/>
                <Select 
                    id="priority"
                    value={form.priority}
                    label="Priority">
                    <MenuItem value="Choose Priority">Choose Priority</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="med">Med</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                </Select>
                <label>Due Date</label>
                <input type="date"/>
                <label>Assigned to:</label>
                {/* May have to map the users to return the options */}
                <select>
                    <option value="andrew">Andrew</option>
                </select>
                <input type="submit" value="assign to andrew"/>
            </form>
        </div>
    )
}

export default CreateToDo
