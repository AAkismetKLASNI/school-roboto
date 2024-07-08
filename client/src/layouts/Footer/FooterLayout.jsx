import { Link } from 'react-router-dom';
import inst from '../../assets/img/primary/inst.png';
import tg from '../../assets/img/primary/tg.png';
import vk from '../../assets/img/primary/vk.png';
import { Container } from '../../ui-components';
import styled from './Footer.module.css';

export const FooterLayout = () => {
	return (
		<footer className={styled.footer}>
			<Container>
				<div className={styled.wrapper}>
					<div className={styled.socialNetwork}>
						<img src={vk} border="0" alt="vk" />
						<img src={inst} border="0" alt="inst" />
						<img src={tg} border="0" alt="tg" />
					</div>
					<div className={styled.documents}>
						<span>договор-оферта</span>
						<span>политика конфиденциальности</span>
					</div>
					<nav className={styled.nav}>
						<Link to="/">ГЛАВНАЯ</Link>
						<Link to="/about-us">О НАС</Link>
						<Link to="/courses">КУРСЫ</Link>
						<Link to="/media">МЕДИА</Link>
					</nav>
				</div>
			</Container>
		</footer>
	);
};
