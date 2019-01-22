import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, Switch } from 'react-router-dom';
import history  from './history';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { getCategories, getUsers, login, getEbooks, getEbook } from './reducers/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import setUpInterceptor from '../src/xhr/interceptor';
import * as serviceWorker from './serviceWorker';

setUpInterceptor();
const rootReducer = combineReducers({getCategories, getEbook, getEbooks, login, getUsers});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));



ReactDOM.render(
    <Provider store = {store}>
        <Router history={history}>
        <div>
        
        <Route path="/" component={App}/>
         <Route path={'/login'} component={LoginPage} /> 
        {/*<Route exact path="/userProfile" component={User}/>
            <IndexRoute component={Home}>
            </IndexRoute>
            </Route> 
        </Route>*/}
        
        </div>
    
        </Router>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
