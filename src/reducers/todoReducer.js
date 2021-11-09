const initialState = []

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "SET_TODOS":
            return action.payload;
        default:
            return state
    }
}

export default todoReducer;