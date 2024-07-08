import { ACTION_TYPE } from '../actions/action-type';

const initialCourse = {
	id: null,
	price: null,
	forWhat: null,
	level: null,
	mode: null,
	features: [],
};

export const courseReducer = (state = initialCourse, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_COURSE: {
			return { ...state, ...action.payload };
		}

		default: {
			return state;
		}
	}
};
