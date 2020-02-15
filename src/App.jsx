import React from 'react';
import './App.css';
import Login from './components/login'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import loginApp from './_reducers';
import thunkMiddleware from 'redux-thunk';
import { Home } from './components/home';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './_helpers';
import { PrivateRoute } from './components';


function App() {

  const store = createStore(loginApp,applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ));


  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
          {/*       <Route path="/register" component={RegisterPage} /> */}
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
