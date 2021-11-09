import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadToDos } from '../actions/todo'

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

    console.log(todos)

    const todoArray = todos.map((todo)=>todo.task)
    return (
        <div>
            {todoArray}
        </div>
    )
}

export default ListToDo
