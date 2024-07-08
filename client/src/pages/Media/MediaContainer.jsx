import { useEffect, useState } from 'react';
import { MediaLayout } from './MediaLayout';
import axios from 'axios';
import { Loader } from '../../ui-components';

export const MediaContainer = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [limit, setLimit] = useState(3);
	const [count, setCount] = useState();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(`/posts?limit=${limit}`).then(({ data: { posts, count } }) => {
			setPosts(posts);
			setCount(count);
			setTimeout(() => setIsLoading(false), 500);
		});
	}, [limit]);

	const getMorePosts = () => setLimit(limit + 3);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<MediaLayout posts={posts} count={count} getMorePosts={getMorePosts} />
			)}
		</>
	);
};
