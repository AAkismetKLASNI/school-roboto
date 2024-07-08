import { Link } from 'react-router-dom';
import styled from './Post.module.css';

export const PostLayout = ({ id, title, imageUrl, publishedAt }) => {
	return (
		<div className={styled.postItem}>
			<div className={styled.postItemContent}>
				<img
					className={styled.postItemImg}
					src={imageUrl}
					border="0"
					alt="image-5"
				/>
				<Link to={`/media/${id}`} className={styled.postItemTitle}>
					{title}
				</Link>
			</div>
			<div className={styled.postPanel}>
				<img
					src="https://i.postimg.cc/QCPFVBMg/free-icon-font-heart.png"
					border="0"
					alt="free-icon-font-heart"
				/>
				<span>{publishedAt}</span>
			</div>
		</div>
	);
};
