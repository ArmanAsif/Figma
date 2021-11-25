import {
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
