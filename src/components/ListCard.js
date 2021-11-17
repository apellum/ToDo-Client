import React from 'react'
import { useDispatch } from 'react-redux'
import { loadToDos } from '../actions/todo'
import { baseUrl } from '../GlobalVariables'
import { Grid, Card, Paper, CardContent, Button } from '@mui/material'

const ListCard = ({ todo, priority, key, completed}) => {
    const dispatch = useDispatch()

    const priorityColor = (priority) => {
        if (completed === true) {
            return "blue"
    }  else if (priority === 1) {
        return "red"
    } else if (priority === 2) {
        return "orange"
    } else if (priority === 3) {
        return "yellow"
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
            <Paper>
                <Card item>
                    <CardContent key={key} style={{ backgroundColor: priorityColor(priority), color: completedText(completed) }}>Task: {todo.task} | Priority: {priorityLabel(priority)} {!todo.completed ? <Button variant="contained" onClick={handleClick}>Mark as Complete</Button> : null}</CardContent>
                    {/* <CardContent>Last Name: {customer.last_name}</CardContent>
                        <CardContent>Date Of Birth: {customer.date_of_birth}</CardContent>
                        <CardContent>Address: {customer.address}</CardContent>
                        <CardContent>Email: {customer.email}</CardContent>
                        <CardContent>Phone Number: {customer.phone_number}</CardContent>
                        <CardContent>Customer ID: {customer.id}</CardContent>
                        <CardContent>Created By: {customer.user_id}</CardContent>
                        <Button onClick={handleHistory}>View Sale History</Button> */}
                    {/* <Button onClick={handleClick}>Mark as Complete</Button> */}
                </Card>
            </Paper>
        </Grid>
    </div>
)
}

export default ListCard