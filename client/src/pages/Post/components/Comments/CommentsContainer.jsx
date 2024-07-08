import { useSelector, useDispatch } from 'react-redux';
import { CommentsLayout } from './CommentsLayout';
import { updateComments } from '../../../../actions';
import { commentsSelector } from '../../../../selectors';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CommentsContainer = () => {
	const [newComment, setNewComment] = useState('');
	const [error, setError] = useState('');
	const comments = useSelector(commentsSelector);
	const params = useParams();

	const dispatch = useDispatch();

	const sendNewComment = () => {
		axios.get('/users/check-auth').then(({ data: { error } }) => {
			if (error) {
				setError(error);
				return;
			}

			if (!newComment.length) setError('Комментарий не может быть пустым');

			axios
				.post(`/posts/${params.id}/comments`, { content: newComment })
				.then(({ data: { comment } }) => {
					dispatch(updateComments(comment));

					setError('');
					setNewComment('');
				});
		});
	};

	return (
		<CommentsLayout
			comments={comments}
			newComment={newComment}
			setNewComment={setNewComment}
			sendNewComment={sendNewComment}
			error={error}
		/>
	);
};
