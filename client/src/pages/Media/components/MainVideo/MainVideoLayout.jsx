import styled from './MainVideo.module.css';

export const MainVideoLayout = () => {
	return (
		<div className={styled.videoContainer}>
			<div className={styled.videoContent}>
				<img
					className={styled.video}
					src="https://i.postimg.cc/dQ9nDJvb/concentrated-young-blonde-student-girl-wearing-glasses-sitting-desk-with-school-tools-reading-book-i.png"
					border="0"
					alt="concentrated-young-blonde-student-girl-wearing-glasses-sitting-desk-with-school-tools-reading-book-i"
				/>
				<img
					className={styled.videoStartBtn}
					src="https://i.postimg.cc/Nfz6rMnz/Polygon-1.png"
					border="0"
					alt="Polygon-1"
				/>
			</div>
			<div className={styled.videoPanel}>
				<img
					src="https://i.postimg.cc/QCPFVBMg/free-icon-font-heart.png"
					border="0"
					alt="free-icon-font-heart"
				/>
				<img
					src="https://i.postimg.cc/xTDJrzWY/free-icon-font-comment-alt-1-1.png"
					border="0"
					alt="free-icon-font-comment-alt-1-1"
				/>
			</div>
		</div>
	);
};
