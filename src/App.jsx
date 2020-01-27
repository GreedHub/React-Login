import React from 'react';
import './App.css';
import Login from './containers/Login.js'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import loginApp from './_reducers';
import thunkMiddleware from 'redux-thunk'


function App() {

  const store = createStore(loginApp,applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ));

  return (
    <div className="App">
      <Provider store={store}>
        <Login></Login>
      </Provider>
    </div>
  );
}

export default App;
