import { ACTION_TYPE } from '../action-type';

export const setPurchases = (course) => ({
	type: ACTION_TYPE.SET_PURCHASES,
	payload: course,
});
