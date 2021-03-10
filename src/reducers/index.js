import { combineReducers } from 'redux';
import coinGeckoReducer from './coinGeckoReducer';


const rootReducer = combineReducers({
    list: coinGeckoReducer,
})


export default rootReducer;