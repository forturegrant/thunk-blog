import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
/*import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers/index';
import rootSaga from '../sagas/index'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(appReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);*/


import reducer from '../reducers'

export const store = createStore(reducer, applyMiddleware(thunk))