import send from '../../../../assets/img/post/send.png';
import user from '../../../../assets/img/post/avatar-user.png';
import { Error } from '../../../../ui-components';
import styled from './Comments.module.css';

export const CommentsLayout = ({
	comments,
	newComment,
	setNewComment,
	sendNewComment,
	error,
}) => {
	return (
		<div className={styled.wrapper}>
			{error && <Error>{error}</Error>}
			<div className={styled.formSendMessage}>
				<textarea
					value={newComment}
					onChange={({ target }) => setNewComment(target.value)}
					className={styled.enterComment}
					placeholder="Здесь ничего нет..."
				></textarea>
				<img src={send} alt="" onClick={sendNewComment} />
			</div>

			<ul className={styled.comments}>
				{comments.length ? (
					comments.map(({ author, content, id, publishedAt }) => {
						return (
							<div className={styled.comment} key={id}>
								<img className={styled.userAvatar} src={user} alt="" />
								<div className={styled.userInfo}>
									<div className={styled.commentInfo}>
										<span>{author}</span>
										<span>{publishedAt}</span>
									</div>
									<span>{content}</span>
								</div>
							</div>
						);
					})
				) : (
					<p className={styled.signal}>Станьте первым комментатором!</p>
				)}
			</ul>
		</div>
	);
};
