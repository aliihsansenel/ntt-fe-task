import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import offerReducer from './reducers/offerReducer';

const rootReducer = combineReducers({
    offers: offerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store


