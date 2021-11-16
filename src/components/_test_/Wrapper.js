import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Login from '../sessions/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App';


const Wrapper = () => {

    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Login />
                </Routes>
            </Router>
        </Provider>
    )
}

export default Wrapper;