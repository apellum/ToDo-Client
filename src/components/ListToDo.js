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
        if (loggedIn) {
            dispatch(loadToDos())
        } else {
            navigate('/login')
        }
    }, [loggedIn, dispatch, navigate])

    const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);

    const todoArray = sortedTodos.map((todo) => <ListCard key={todo.id} priority={todo.priority} todo={todo} />)

    return (
        <div>
            {todoArray}
        </div>
    )
}

export default ListToDo
