import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadToDos } from '../actions/todo'
import ListCard from './ListCard'

const ListToDo = () => {
    const todos = useSelector(state => state.todo)
    const loggedIn = useSelector(state => state.sessions.loggedIn)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if(loggedIn){
            dispatch(loadToDos())
        } else {
            navigate('/login')
        }
    }, [loggedIn, dispatch, navigate])


    const todoArray = todos.map((todo)=> <ListCard todo={todo}/>)
    const priorityLevels = {high, medium, low}

    // assign keys to priority levels {high key=0, low=2} then sort based off of the keys
    const sortedTodoArray = todoArray.sort((x,y)=> priorityLevels.indexOf(x.priority) - priorityLevels.indexOf(y.priority));
    console.log(sortedTodoArray)
    console.log(todoArray)
    return (
        <div>
            {todoArray}
        </div>
    )
}

export default ListToDo
