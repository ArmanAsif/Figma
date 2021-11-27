import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
	userSaleListReducer,
	userSupportListReducer,
} from "./reducers/contactReducers";

const reducers = combineReducers({
	userSupportList: userSupportListReducer,
	userSaleList: userSaleListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
