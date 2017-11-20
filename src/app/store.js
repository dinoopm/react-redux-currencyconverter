import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import currency from "./reducers/currencyConversionReducer";


export default createStore(
    combineReducers({
        currency
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);