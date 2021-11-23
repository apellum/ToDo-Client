const initialState = {
    todos: [],
    sortedTodos: [],
    completedTodos: [],
    notCompletedTodos: []
}

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todos: action.payload};
        case "SET_TODOS":
            return {...state, sortedTodos: action.payload};
        case "COMPLETED_TODOS":
            return {...state, completedTodos: action.payload};
        case "NOT_COMPLETED_TODOS":
            return {...state, notCompletedTodos: action.payload};
        default:
            return state
    }
}

export default todoReducer;