import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import requestingReducer from './requestingReducer';
import sessionsReducer from './sessionsReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    errors: errorsReducer,
    requesting: requestingReducer,
    todo: todoReducer,
    sessions: sessionsReducer
})