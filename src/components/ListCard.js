import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadToDos } from '../actions/todo'
import { baseUrl } from '../GlobalVariables'
import { Grid, Card, Paper, CardContent, Button } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ListCard = ({ todo, priority, key, completed}) => {
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todo)

    const priorityColor = (priority) => {
        if (completed === true) {
            return "#1976d2"
    }  else if (priority === 1) {
        return "#D72727"
    } else if (priority === 2) {
        return "#E07F1E"
    } else if (priority === 3) {
        return "#E0E01E"
    } else {
        return null
    }
}

const completedText = (completed) => {
    if (completed){
        return "white"
    }
}

const priorityLabel = (priority) => {
    if (priority === 1) {
        return "High"
    } else if (priority === 2) {
        return "Medium"
    } else if (priority === 3) {
        return "Low"
    } else {
        return priority
    }
}

const updateList = (id) => {
    todos.filter(todo=>todo.id !== id)
}

const handleDelete = async (id) => {
    await fetch(baseUrl + `/todos/${todo.id}`, {
        method: "DELETE"
    })
    updateList(id)
    dispatch(loadToDos())
    console.log(todos)
}

const handleClick = async () => {
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    const body = {
        completed: !todo.completed
    }
    const options = {
        method: "PATCH",
        headers,
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + `/todos/${todo.id}`, options)
    const data = await response.json()
    dispatch(loadToDos(data))
}


return (
    <div>
        <Grid>
            <Paper sx={{borderRadius: 25}}>
                <Card item >
                    <CardContent key={key} style={{ backgroundColor: priorityColor(priority), color: completedText(completed), borderRadius: 15 }}>Task: {todo.task} | Priority: {priorityLabel(priority)} {!todo.completed ? <Button variant="contained" sx={{padding:'4px, 4px, 4px, 4px', float:"right", }} onClick={handleClick}>Complete</Button> : null} <DeleteForeverIcon onClick={handleDelete}/></CardContent>
                </Card>
            </Paper>
            <br/>
        </Grid>
    </div>
)
}

export default ListCard