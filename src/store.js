import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { userSupportListReducer } from "./reducers/contactReducers";

const reducers = combineReducers({
	userSupportList: userSupportListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
