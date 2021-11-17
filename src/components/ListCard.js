import React from 'react'
import { Grid, Card, Paper, CardContent } from '@mui/material'

const ListCard = ({todo, priority}) => {

    const priorityLabel = (priority) => {
        if (priority === 1){
            return "High"
        } else if (priority === 2) {
            return "Medium"
        } else if (priority === 3 ){
            return "Low"
        } else {
            return priority
        }
    } 

    return (
        <div>
            <Grid>
                <Paper>
                    <Card item>
                        <CardContent>Task: {todo.task} | Priority: {priorityLabel(priority)}</CardContent>
                        {/* <CardContent>Priority: {todo.priority}</CardContent> */}
                        {/* <CardContent>Last Name: {customer.last_name}</CardContent>
                        <CardContent>Date Of Birth: {customer.date_of_birth}</CardContent>
                        <CardContent>Address: {customer.address}</CardContent>
                        <CardContent>Email: {customer.email}</CardContent>
                        <CardContent>Phone Number: {customer.phone_number}</CardContent>
                        <CardContent>Customer ID: {customer.id}</CardContent>
                        <CardContent>Created By: {customer.user_id}</CardContent>
                        <Button onClick={handleHistory}>View Sale History</Button>
                        <Button onClick={handleClick}>Set Customer</Button> */}
                    </Card>
                </Paper>
            </Grid>
        </div>
    )
}

export default ListCard