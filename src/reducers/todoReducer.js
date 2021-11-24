const initialState = {
    todos: [],
    sortedTodos: []
}

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todos: action.payload};
        case "SET_TODOS":
            return {...state, sortedTodos: action.payload};
        default:
            return state
    }
}

export default todoReducer;