import axios from 'axios';
import { dropUser } from '../unasync/drop-user';

export const logoutAsync = () => (dispatch) =>
	axios.post('/logout').then(() => {
		dispatch(dropUser);
		sessionStorage.removeItem('user');
	});
