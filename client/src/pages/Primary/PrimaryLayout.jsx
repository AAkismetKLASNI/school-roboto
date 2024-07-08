import { H, Button } from '../../ui-components';
import banner from '../../assets/img/primary/banner.png';
import inst from '../../assets/img/primary/inst.png';
import tg from '../../assets/img/primary/tg.png';
import vk from '../../assets/img/primary/vk.png';
import styled from './Primary.module.css';

export const PrimaryLayout = () => {
	return (
		<div className={styled.main}>
			<div className={styled.content}>
				<H>
					«Я - Академик» <span style={{ color: '#39CADF' }}>путь с 0 до 1</span>
				</H>
				<p>Школа программирования и робототехники для детей и подростков</p>
				<Button blue2 link="/courses">
					ПОПРОБОВАТЬ БЕСПЛАТНО
				</Button>
				<div className={styled.socialNetwork}>
					<img src={vk} border="0" alt="vk" />
					<img src={inst} border="0" alt="inst" />
					<img src={tg} border="0" alt="tg" />
				</div>
			</div>

			<img className={styled.robotBanner} src={banner} alt="banner" />
		</div>
	);
};
