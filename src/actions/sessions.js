import {baseUrl} from '../GlobalVariables'

export const signup = (details, navigate) => {
    return async (dispatch) => {
      dispatch({ type: "REQUESTING" });
  
      const resp = await fetch(baseUrl + '/signup', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details)
      })
      const data = await resp.json();
      if (data.errors) {
        dispatch({ type: "ERRORS", payload: data.errors })
      } else {
        localStorage.setItem('jwt', data.jwt)
        dispatch({ type: "LOGIN", payload: data })
        dispatch({ type: "CLEAR_ERRORS" })
        navigate("/")
        dispatch({ type: "COMPLETED_REQUESTING" });
      }
    }
  }

export const login = (state, navigate) => {
    return async dispatch => {
        dispatch({ type: "REQUESTING" });
        const resp = await fetch(baseUrl + '/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        })
        const data = await resp.json();
        console.log(data)
        if (data.errors) {
            dispatch({ type: "ERRORS", payload: data.errors })
        } else {
            localStorage.setItem('jwt', data.jwt);
            dispatch({ type: "CLEAR_ERRRORS" })
            dispatch({ type: "LOGIN", payload: data });
            navigate('/')
        }
        dispatch({ type: "DONE_REQUESTING" });
    }
}

export const getCurrentUser = () => {
    return async dispatch => {
        dispatch({ type: "REQUESTING"})
        const resp = await fetch(baseUrl + '/get-current-user', {
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `bearer ${localStorage.getItem('jwt')}`
            }
        })
        const data = await resp.json();
        console.log(data)
        const payload = {
            user: data.user,
            jwt: localStorage.getItem('jwt'),
        }
        if (data.user) {
            dispatch({ type: "LOGIN", payload})
        }
        dispatch({ type: "DONE_REQUESTING" })
    }
}

export const logout = () => {
    localStorage.removeItem('jwt');

    return {
        type: "LOGOUT"
    }
}