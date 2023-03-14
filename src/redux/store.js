import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducers from './root-reducers';

const middlewares = [ reduxThunk];

if (process.env.MODE_ENV === "development"){
    middlewares.push(logger)
}  

const store = createStore(rootReducers,applyMiddleware(...middlewares));

export default store;