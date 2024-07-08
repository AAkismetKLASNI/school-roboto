import { H } from '../../ui-components';
import { MainVideoContainer, PostsContainer } from './components';
import styled from './Media.module.css';

export const MediaLayout = ({ posts, count, getMorePosts }) => {
	return (
		<div className={styled.wrapper}>
			<H>Учись вместе с нами</H>
			<MainVideoContainer />
			<PostsContainer posts={posts} limit={count} getMorePosts={getMorePosts} />
		</div>
	);
};
