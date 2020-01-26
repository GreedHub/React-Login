import React from 'react';
import './App.css';
import Login from './containers/Login.js'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginApp from './reducers/index';

function App() {

  const store = createStore(loginApp);

  return (
    <div className="App">
      <Provider store={store}>
        <Login></Login>
      </Provider>
    </div>
  );
}

export default App;
