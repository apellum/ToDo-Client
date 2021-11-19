import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadToDos } from '../actions/todo'
import ListCard from './ListCard'
import { Select, MenuItem, FormControl, Paper } from '@mui/material'

const ListToDo = () => {
    const listStyle = { padding: 20, height: '70vh', width: 650, margin: '20px auto', borderRadius: 25, overflowY: 'scroll' }
    const todos = useSelector(state => state.todo)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const [filteredItems, setFilteredItems] = useState([])
    const [value, setValue] = useState("false")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (loggedIn) {
            dispatch(loadToDos())
        } else {
            navigate('/login')
        }
    }, [loggedIn, dispatch, navigate])

    // Working on filter for Completed - None of this is working currently
    // const handleChange = (e) => {
    //     setTodoFilter(e.target.value)
    // }


    // const filteredTodos = sortedTodos.filter((todo) => todo.completed === {todoFilter})

    // function filterByCompleted(todo) {
    //     if (todo.completed === true) {
    //         return true
    //     }
    //     invalidEntries++
    //     return false;
    // }

    // const todosFilter = sortedTodos.filter(filterByCompleted)

    // const handleFilter = () => {
    //     let todoFilter
    //     if (value === true) {
    //         todoFilter = sortedTodos.filter((todo)=> todo.completed)
    //     } else if (value === false) {
    //         todoFilter = sortedTodos.filter((todo)=> !todo.completed)
    //     } else {
    //         todoFilter = sortedTodos
    //     }
    //     console.log(e.value)
    // }

    const handleChange = e => {
        let todoFilter
        console.log(e.target.value)
        if (e.target.value === 'true') {
            todoFilter = sortedTodos.filter((todo) => todo.completed)
        } else if (e.target.value === 'false') {
            todoFilter = sortedTodos.filter((todo) => !todo.completed)
        } else {
            todoFilter = sortedTodos
        }
        setFilteredItems(todoFilter)
    }
    const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);
    // const filteredTodos = sortedTodos.filter((todo)=> !todo.completed)
    console.log(filteredItems)
    const todoArray = filteredItems.map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo} />)
    // debugger

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    id="completed"
                    name="completed"
                    value={todos.completed}
                    autoWidth
                    displayEmpty
                    label="Completed"
                    onChange={handleChange}
                >
                    <MenuItem value='false' selected>Not Completed</MenuItem>
                    <MenuItem value="true">Completed</MenuItem>
                    <MenuItem value="">All</MenuItem>
                </Select>
            </FormControl>
            <Paper elevation={10} style={listStyle}>
                {todoArray}
            </Paper>
        </div>
    )
}

export default ListToDo
