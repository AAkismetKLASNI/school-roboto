import { PostsLayout } from './PostsLayout';

export const PostsContainer = ({ posts, count, getMorePosts }) => {
	return (
		<PostsLayout posts={posts} count={count} getMorePosts={getMorePosts} />
	);
};
