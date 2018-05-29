import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
/*import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers/index';
import rootSaga from '../sagas/index'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(appReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);*/


import { registerR } from '../reducers/register.js'
export const store = createStore(registerR,applyMiddleware(thunk))