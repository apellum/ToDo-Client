import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadToDos } from '../actions/todo'
import ListCard from './ListCard'
import { Select, MenuItem, InputLabel } from '@mui/material'

const ListToDo = () => {
    const todos = useSelector(state => state.todo)
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const [todoFilter, setTodoFilter] = useState("")

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
    
    
    const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);
    // const filteredTodos = sortedTodos.filter((todo)=> {
    //     if (){
    //         return 
    //     }
    // }
    const todoArray = sortedTodos.map((todo) => <ListCard key={todo.id} priority={todo.priority} completed={todo.completed} todo={todo} />)
    // debugger
    console.log(todos)

    return (
        <div>
            <InputLabel>Completed</InputLabel>
                <Select
                    id="completed"
                    name="completed"
                    value={todos.completed}
                    label="Completed"
                >
                    <MenuItem value='false'>Not Completed</MenuItem>
                    <MenuItem value="true">Completed</MenuItem>
                    <MenuItem value="">All</MenuItem>
                </Select>
            {todoArray}
        </div>
    )
}

export default ListToDo
