import React from 'react';
import './App.css';

/* Import Store and reducers */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginApp from './_reducers';

/* Import Router and helpers */
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './_helpers';
import { PrivateRoute } from './_components';

/* Import APP components */
import Home from './components/home';
import Login from './components/login';

function App() {

  /* Create Store and apply thunk to enable ASYNC actions */
  const store = createStore(loginApp,applyMiddleware(
    thunkMiddleware
  ));

  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
