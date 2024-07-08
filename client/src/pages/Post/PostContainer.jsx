import { useEffect } from 'react';
import { PostLayout } from './PostLayout';
import { useParams } from 'react-router-dom';
import { setPost } from '../../actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const PostContainer = () => {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get(`/posts/${params.id}`).then(({ data: { post } }) => {
			const { content } = post;

			dispatch(setPost(post, content));
		});
	}, [params]);

	return <PostLayout />;
};
