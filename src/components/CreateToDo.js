import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToDo, loadToDos } from '../actions/todo';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const CreateToDo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.sessions.currentUser)
    // const todos = useSelector(state => state.todo)
    // console.log(todos)
    const [form, setForm] = useState({
        task: "",
        priority: "Choose Priority",
        completed: false
       })

    // useEffect(()=> {
    //     dispatch(loadToDos)
    // }, [])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addToDo(form, currentUser))
        navigate('/todos')
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
                    <MenuItem value="1">High</MenuItem>
                    <MenuItem value="2">Med</MenuItem>
                    <MenuItem value="3">Low</MenuItem>
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
