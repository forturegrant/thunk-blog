import {combineReducers} from 'redux'
import global from './global'
import admin from './admin'
import front from './front'

export default combineReducers({
    global,
    admin,
    front
})