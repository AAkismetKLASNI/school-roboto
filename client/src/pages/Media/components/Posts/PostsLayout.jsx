import { Button } from '../../../../ui-components';
import { PostLayout } from './components';

import styled from './Posts.module.css';

export const PostsLayout = ({ posts, count, getMorePosts }) => {
	return (
		<div className={styled.wrapper}>
			<ul className={styled.postContainer}>
				{posts.map(({ id, imageUrl, title, publishedAt }) => {
					return (
						<PostLayout
							key={id}
							id={id}
							imageUrl={imageUrl}
							title={title}
							publishedAt={publishedAt}
						/>
					);
				})}
			</ul>
			<Button
				blue2
				onClick={getMorePosts}
				disabled={count === posts.length}
				unactive={count === posts.length}
			>
				Ещё
			</Button>
		</div>
	);
};
