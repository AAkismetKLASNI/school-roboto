import {
	SectionFirstLayout,
	CarouselContainer,
	SectionSecondLayout,
	SectionThirdLayout,
} from './components';
import banner2 from '../../assets/img/about-us/banner-2.png';
import banner3 from '../../assets/img/about-us/banner-3.png';
import { H, Button } from '../../ui-components';
import styled from './AboutUs.module.css';

export const AboutUsLayout = () => {
	return (
		<div className={styled.wrapper}>
			<SectionFirstLayout />
			<CarouselContainer>
				<div className={`${styled.item} ${styled.item1}`}>
					<img
						className={styled.carouselPhoto}
						src={banner2}
						border="0"
						alt="father-sons-making-robot-1"
					/>
					<div className={styled.carouselContainer}>
						<div className={styled.carouselContentWrapper}>
							<div className={styled.carouselContent}>
								<H H2>СТАНЬ ЭКСПЕРТОМ В ОБЛАСТИ РОБОТОТЕХНИКИ</H>
								<H H3 blue>
									для детей (7-14 лет)
								</H>
							</div>
							<Button link="/courses" orange2>
								ПЕРЕЙТИ НА КУРС
							</Button>
						</div>
						<div className={styled.arrowContainer}></div>
					</div>
				</div>
				<div className={`${styled.item} ${styled.item1}`}>
					<img
						className={styled.carouselPhoto}
						src={banner3}
						border="0"
						alt="students-working-study-group-1"
					/>

					<div className={styled.carouselContainer}>
						<div className={styled.carouselContentWrapper}>
							<div className={styled.carouselContent}>
								<H H2>СТАНЬ ЭКСПЕРТОМ В ОБЛАСТИ ПРОГРАММИРОВАНИЯ</H>
								<H H3 blue>
									для подростков (14-17 лет)
								</H>
							</div>
							<Button link="/courses" orange2>
								ПЕРЕЙТИ НА КУРС
							</Button>
						</div>
						<div className={styled.arrowContainer}></div>
					</div>
				</div>
			</CarouselContainer>
			<SectionSecondLayout />
			<SectionThirdLayout />
		</div>
	);
};
