import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../GlobalVariables'
import { loadToDos } from '../actions/todo'
import ListCard from './ListCard'
import { Select, MenuItem, FormControl, Paper } from '@mui/material'

const ListToDo = () => {
    const listStyle = { padding: 20, height: '70vh', width: 650, margin: '20px auto', borderRadius: 25, overflowY: 'scroll' }
    const todos = useSelector(state => state.todo.todos)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const sortedTodos = useSelector(state => state.todo.sortedTodos)
    const [filterValue, setFilterValue] = useState("false")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (loggedIn) {
            dispatch(loadToDos())
        } else {
            navigate('/login')
        }
    }, [loggedIn, dispatch, navigate, filterValue, todos])

    const handleChange = e => {
        setFilterValue(e.target.value)
    }

    const sortedByValues = (filterValue) => {
        if (filterValue === 'true'){
            return sortedTodos.filter((todo) => todo.completed).map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo}/>)
        } else if (filterValue === 'false'){
            return sortedTodos.filter((todo) => !todo.completed).map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo}/>)
        } else {
            return sortedTodos.map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo}/>)
        }
    }

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    id="completed"
                    name="completed"
                    value={filterValue}
                    autoWidth
                    displayEmpty
                    label="Completed"
                    onChange={handleChange}
                >
                    <MenuItem value='false' >Not Completed</MenuItem>
                    <MenuItem value="true">Completed</MenuItem>
                    <MenuItem value="">All</MenuItem>
                </Select>
            </FormControl>
            <Paper elevation={10} style={listStyle}>
                {sortedByValues(filterValue)}
            </Paper>
        </div>
    )
}

export default ListToDo
