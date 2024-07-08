import axios from 'axios';
import { setUser } from '../unasync/set-user';

export const fetchChangeUserAsync = (userData, userId) => (dispatch) => {
	axios
		.patch(`/users/${userId}`, { data: userData })
		.then(({ data: { user, error } }) => {
			if (error) {
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('user', JSON.stringify({ ...user }));
		});
};
