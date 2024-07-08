import { ACTION_TYPE } from '../action-type';

export const setPost = (post) => ({
	type: ACTION_TYPE.SET_POST,
	payload: post,
});
