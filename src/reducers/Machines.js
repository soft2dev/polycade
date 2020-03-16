import * as types from '../actions/ActionTypes';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as API from '../lib/api';


const initialState = {
    machines: [],

}
const rmap = (machines, id, data) => machines.map( 
    machine => {
        return machine.id === id ? {...machine, ...data} :machine
    }
)

export const getMachines = createAction( types.GET_MACHINES, API.getMachines )
export const putMachineName = createAction( types.PUT_MACHINE_NAME, API.putMachineName )
export const getHealth = createAction( types.GET_HEALTH, (id, data) => ({id, data}))

export default handleActions({
    ...pender({
        type: types.GET_MACHINES,
        onSuccess: (state, action) => ({
            ...state,
            machines: action.payload.data
        })
    }),
    ...pender({
        type: types.PUT_MACHINE_NAME,
        onSuccess: (state, action) => ({    
            ...state,
            machines: rmap(state.machines, action.payload.data.id, action.payload.data)
        })
    }),
    GET_HEALTH: (state, action) => ({
        ...state,
        machines: rmap(state.machines, action.payload.id, action.payload.data)
    })
}, initialState)