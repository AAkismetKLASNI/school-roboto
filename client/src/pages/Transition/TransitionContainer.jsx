import { useEffect } from 'react';
import { TransitionLayout } from './TransitionLayout';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCourse } from '../../actions';
import axios from 'axios';

export const TransitionContainer = () => {
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		axios.get(`/courses/${params.id}`).then(({ data: { course } }) => {
			dispatch(setCourse(course));
		});
	}, []);

	return <TransitionLayout />;
};
