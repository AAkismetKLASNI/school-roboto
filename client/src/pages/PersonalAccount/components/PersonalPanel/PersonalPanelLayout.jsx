import { useDispatch } from 'react-redux';
import { logoutAsync } from '../../../../actions';
import { useNavigate, Link } from 'react-router-dom';
import styled from './PersonalPanel.module.css';

export const PersonalPanelLayout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logoutAsync()).then(() => navigate('/authorization'));
	};

	return (
		<div className={styled.personalPanel}>
			<button className={styled.btnHelper}>Поддержка</button>
			<div>
				<Link to="/courses">Потоки</Link>
				<Link>Сообщения</Link>
				<Link to="purchases">Покупки</Link>
			</div>
			<button className={styled.btnLogout} onClick={onLogout}>
				Выйти
			</button>
		</div>
	);
};
