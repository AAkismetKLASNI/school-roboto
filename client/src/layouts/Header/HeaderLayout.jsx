import { Link } from 'react-router-dom';
import { Button, Container } from '../../ui-components';
import { useSelector } from 'react-redux';
import { roleIdSelector } from '../../selectors';
import styled from './Header.module.css';
import { ROLES } from '../../constants/roles';

export const HeaderLayout = () => {
	const roleId = useSelector(roleIdSelector);

	return (
		<header className={styled.header}>
			<Container>
				<div className={styled.wrapper}>
					<nav>
						<Link to="/">ГЛАВНАЯ</Link>
						<Link to="/about-us">О НАС</Link>
						<Link to="/courses">КУРСЫ</Link>
						<Link to="/media">МЕДИА</Link>
					</nav>
					{roleId === ROLES.GUEST ? (
						<Button blue1 link="/authorization">
							ВОЙТИ
						</Button>
					) : (
						<Button blue1 link="/personal-account">
							ЛИЧНЫЙ КАБИНЕТ
						</Button>
					)}
				</div>
			</Container>
		</header>
	);
};
