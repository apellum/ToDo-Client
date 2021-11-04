import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const CreateToDo = () => {
    const [form, setForm] = useState({
        task: "",
        priority: "Choose Priority"
    })

    const handleChange = (e) => {
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addToDo(state, currentUser))
    }
    return (
        <div style={{padding: "200px"}}>
            <form>
                <label>Task</label>
                <input type="text"/>
                <label>Priority</label>
                <select>
                    <option value="Choose Priority">Low</option>
                    <option value="high">High</option>
                    <option value="med">Med</option>
                    <option value="low">Low</option>
                </select>
                <label>Due Date</label>
                <input type="date"/>
                <label>Assigned to:</label>
                {/* May have to map the users to return the options */}
                <select>
                    <option value="andrew">Andrew</option>
                </select>
                <input type="submit" value="assign to andrew"/>
            </form>
        </div>
    )
}

export default CreateToDo
