import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender'
import machines from './Machines'

const reducers = combineReducers({
    machines,
    penderReducer
})

export default reducers