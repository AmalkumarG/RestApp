import {createStore,combineReducers,applyMiddleware} from "redux"

import thunk from "redux-thunk"
import Reducer from "./reducer/restReducer"
const reducers=combineReducers({Reducer})
const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))

export default store