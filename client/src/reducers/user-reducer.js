import { ACTION_TYPE } from '../actions/action-type';

const initialUser = {
	id: null,
	firstname: null,
	lastname: null,
	password: null,
	telephone: null,
	gender: null,
	email: null,
	purchases: [],
	roleId: 2,
	session: null,
};

export const userReducer = (state = initialUser, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return { ...state, ...action.payload };

		case ACTION_TYPE.SET_PURCHASES:
			return { ...state, purchases: [...action.payload] };

		case ACTION_TYPE.LOGOUT: {
			return initialUser;
		}

		default:
			return state;
	}
};
