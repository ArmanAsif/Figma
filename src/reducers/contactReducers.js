import {
	USER_SALE_LIST_FAIL,
	USER_SALE_LIST_REQUEST,
	USER_SALE_LIST_SUCCESS,
	USER_SUPPORT_LIST_FAIL,
	USER_SUPPORT_LIST_REQUEST,
	USER_SUPPORT_LIST_SUCCESS,
} from "../constants/contactConstants";

export const userSupportListReducer = (state = { supports: [] }, action) => {
	switch (action.type) {
		case USER_SUPPORT_LIST_REQUEST:
			return { loading: true, supports: [] };
		case USER_SUPPORT_LIST_SUCCESS:
			return { loading: false, success: true, supports: action.payload };
		case USER_SUPPORT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userSaleListReducer = (state = { sales: [] }, action) => {
	switch (action.type) {
		case USER_SALE_LIST_REQUEST:
			return { loading: true, sales: [] };
		case USER_SALE_LIST_SUCCESS:
			return { loading: false, success: true, sales: action.payload };
		case USER_SALE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
