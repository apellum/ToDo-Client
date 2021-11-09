import { baseUrl } from "../GlobalVariables";

export const addToDo = (details, token) => {
    return async (dispatch) => {
        const resp = await fetch(baseUrl + '/todos', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `bearer ${token}`
            },
            body: JSON.stringify(details)
        })
        const data = await resp.json();
        dispatch({type: "ADD_TODO", payload: data})
    }
}

