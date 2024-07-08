import { ACTION_TYPE } from '../action-type';

export const setCourse = (course) => ({
	type: ACTION_TYPE.SET_COURSE,
	payload: course,
});
