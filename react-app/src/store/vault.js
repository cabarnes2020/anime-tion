import animeReducer from "./anime"

const GET_VAULTS = 'vaults/getVaults'
const GET_A_VAULT = 'vaults/getOneVault'

const initialState = {}

const getVaults = (payload) => {
    return {
        type: GET_VAULTS, 
        payload: payload
    }
}

const getOneVault = (vault) => {
    return {
        type: GET_ONE_VAULT,
        payload: vault
    }
}


export const getAll = () => (dispatch) => {
    const res = await fetch('/api/vaults')

    if(res.ok){
        const vaults = await res.json()
        dispatch(getVaults(vaults))
    }
}


const vaultReducer = (state = initialState, action) => {
    let newState

    switch(action.type){
        case GET_VAULTS:
            newState = Object.assign({}, state)
            for(let id in action.payload) {
                newState[id] = action.payload[id]
            }
        default:
            return state
    }
}

export default vaultReducer


