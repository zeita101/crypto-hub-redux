import * as actions from '../actions/coinGeckoActions';

export const initialState = {
    list: {},
    loading: false,
    hasErrors: false
}

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_COIN_LIST:
            return { ...state, loading: true }
        case actions.GET_COIN_LIST_SUCCESS:
            return { ...state, list: action.payload, loading: false }
        case actions.GET_COIN_LIST_FAILURE:
            return { ...state, hasErrors: true, loading: false }
        default:
            return state
    }
}