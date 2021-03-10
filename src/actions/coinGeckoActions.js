import fetchCoinGeckoAPI from "../services/fetchCoinGeckoAPI";

export const GET_COIN_LIST = "GET_COIN_LIST";
export const GET_COIN_LIST_SUCCESS = "GET_COIN_LIST_SUCCESS";
export const GET_COIN_LIST_FAILURE = "GET_COIN_LIST_FAILURE";

export const getCoinList = () => ({
    type: GET_COIN_LIST
})

export const getCoinListSuccess = (list) => ({
    type: GET_COIN_LIST_SUCCESS,
    payload: list
})

export const getCoinListFailure = () => ({
    type: GET_COIN_LIST_FAILURE
})

export function fetchCoinList() {
    return async (dispatch) => {
        dispatch(getCoinList())
        try {
            const res = await fetchCoinGeckoAPI();
            console.log("RES", res)
            dispatch(getCoinListSuccess(res))
        }
        catch (e) {
            dispatch(getCoinListFailure())
        }
    }
}