import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../actions/todo';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const CreateToDo = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.sessions.currentUser)
    const [form, setForm] = useState({
        task: "",
        priority: "Choose Priority"
       })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addToDo(form, currentUser))
    }
    return (
        <div style={{ padding: "200px" }}>
            <form onSubmit={handleSubmit}>
                <TextField name="task" id="task" label="Task" value={form.task} onChange={handleChange} />
                <Select
                    id="priority"
                    name="priority"
                    value={form.priority}
                    label="Priority"
                    onChange={handleChange}>
                    <MenuItem value="Choose Priority">Choose Priority</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="med">Med</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                </Select>
                {/*  */}
                {/* May have to map the users to return the options */}
                {/* <Select onChange={handleChange} name="assignee" label="Priority">
                    <MenuItem value={form.assignee}>Andrew</MenuItem>
                </Select> */}
                <Button
                                    type="submit"
                                    value="assign to andrew"
                                    variant='text'
                                 >Create New ToDO</Button>
            </form>
        </div>
    )
}

export default CreateToDo
