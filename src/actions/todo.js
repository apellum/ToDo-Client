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
    dispatch({ type: "ADD_TODO", payload: data })
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
    const data = await resp.json();
    const sortedData = data.sort((a, b) => a.priority - b.priority);
    const completedTodos = sortedData.filter((todo) => todo.completed)
    const notCompleted = sortedData.filter((todo) => !todo.completed)
    dispatch({ type: "SET_TODOS", payload: sortedData })
    dispatch({ type: "COMPLETED_TODOS", payload: completedTodos})
    dispatch({ type: "NOT_COMPLETED_TODOS", payload: notCompleted})
    dispatch({ type: "DONE_REQUESTING" })
  }
}



