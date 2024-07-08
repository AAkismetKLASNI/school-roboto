import { ContentContainer, CommentsContainer } from './components';
import styled from './Post.module.css';

export const PostLayout = () => {
	return (
		<div className={styled.wrapper}>
			<ContentContainer />
			<CommentsContainer />
		</div>
	);
};
