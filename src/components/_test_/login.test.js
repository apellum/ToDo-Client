import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Login from '../sessions/Login';
import Wrapper from './Wrapper';


// email input
// password input
// submit button

// test('has email component', () => {
//   render(<Login />);
//   const email = screen.getByRole('input', {name: 'email'});
//   expect(email).toBeInTheDocument();
// });

test('has password component', () => {
  render(<Provider><Login/></Provider>);
  const password = screen.findByTestId('password-input', {name: 'password'});
  expect(password).toBeInTheDocument();
});

// test('has submit button component', () => {
//   render(<Login />);
//   const button = screen.getByRole('button', {name: 'Login'});
//   expect(button).toBeInTheDocument();
// });