import reducer from '../redux/reducers/root-reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));
    

export default store;