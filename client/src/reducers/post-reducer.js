import { ACTION_TYPE } from '../actions/action-type';

const initialPost = {
	id: null,
	title: null,
	content: null,
	publishedAt: null,
	imageUrl: null,
	comments: [],
};

export const postReducer = (state = initialPost, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_POST: {
			return { ...state, ...action.payload };
		}
		case ACTION_TYPE.UPDATE_COMMENTS: {
			return { ...state, comments: [...state.comments, action.payload] };
		}
		default:
			return state;
	}
};
