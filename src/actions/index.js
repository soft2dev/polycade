import * as types from './ActionTypes';

export function getMachines() {
    return {
        type: types.GET_MACHINES
    }
}

export function getHealth() {
    return {
        type: types.GET_HEALTH
    }
}

export function putMachineName() {
    return {
        type: types.PUT_MACHINE_NAME
    }
}

