import styled from './Carousel.module.css';

export const CarouselLayout = ({
	pages,
	offset,
	handleLeftArrowClick,
	handleRigthArrowClick,
}) => {
	return (
		<div className={styled.mainContainer}>
			<img
				className={`${styled.arrow} ${styled.arrowLeft}`}
				src="https://i.postimg.cc/XNLxmn3Q/Group-62.png"
				border="0"
				alt="Group-62"
				onClick={handleLeftArrowClick}
			/>
			<div className={styled.window}>
				<div
					className={styled.allPagesContainer}
					style={{ transform: `translateX(${offset}px)` }}
				>
					{pages}
				</div>
			</div>
			<img
				className={`${styled.arrow} ${styled.arrowRight}`}
				src="https://i.postimg.cc/V6Vv0SnK/Group-16.png"
				border="0"
				alt="Group-16"
				onClick={handleRigthArrowClick}
			/>
		</div>
	);
};
