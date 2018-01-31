import {createStore, combineReducers, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import reducers from "./../reducer";
import {middleware} from "../datasource/socket";

const middlewares = [middleware, logger];
const store = createStore(combineReducers(reducers), {}, applyMiddleware.apply(null, middlewares));


export default store;