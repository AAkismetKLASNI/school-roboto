import { ACTION_TYPE } from '../action-type';

export const updateComments = (comments) => ({
	type: ACTION_TYPE.UPDATE_COMMENTS,
	payload: comments,
});
