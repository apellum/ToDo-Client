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
        console.log(resp)
        const data = await resp.json();
        console.log(data)
        dispatch({type: "ADD_TODO", payload: data})
    }
}

export const loadToDos = () => {
    return async dispatch => {
      dispatch({ type: "REQUESTING" });
      const resp = await fetch(baseUrl + '/todos', {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      })
      console.log(resp)
      const data = await resp.json();
      dispatch({ type: "SET_TODOS", payload: data})
      dispatch({ type: "DONE_REQUESTING" })
    }
}

