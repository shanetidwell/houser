import {createStore , applyMiddleware} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware'
import reducer from './redux/reducers/index';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));