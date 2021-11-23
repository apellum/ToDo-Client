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
    const completedTodos = useSelector(state => state.todo.completedTodos)
    const notCompletedTodos = useSelector(state => state.todo.notCompletedTodos)
    const [filterValue, setFilterValue] = useState("false")
    // const [filteredItems, setFilteredItems] = useState(sortedTodos.filter((todo) => !todo.completed))

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (loggedIn) {
            dispatch(loadToDos())
        } else {
            navigate('/login')
        }
    }, [loggedIn, dispatch, navigate, filterValue, todos])

    // const removeTodo = (id) => {
    //     todos.filter(todo=>todo.id !== id)
    // }

    // const handleDelete = async (id) => {
    //     await fetch(baseUrl + `/todos/${id}`, {
    //         method: "DELETE"
    //     })
    //     removeTodo(id)
    //     dispatch(loadToDos())
    // }

    const handleChange = e => {
        setFilterValue(e.target.value)
    }

    // const handleChange = e => {
    //     let todoFilter
    //     console.log("e.value", e.target.value)
    //     setFilterValue(e.target.value)
    //     if (e.target.value === 'true') {
    //         todoFilter = todos.filter((todo) => todo.completed)
    //         console.log("filter value", filterValue)
    //     } else if (e.target.value === 'false') {
    //         todoFilter = todos.filter((todo) => !todo.completed)
    //     } else {
    //         todoFilter = sortedTodos
    //     }
    //     setFilteredItems(todoFilter)
    // }

    // const filteredTodos = sortedTodos.filter((todo)=> !todo.completed)
    const sortedByValues = (filterValue) => {
        if (filterValue === 'true'){
            return completedTodos.map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo}/>)
        } else if (filterValue === 'false'){
            return notCompletedTodos.map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo}/>)
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
