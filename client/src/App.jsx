import { HeaderLayout, MainLayout, FooterLayout } from './layouts';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { useMatch } from 'react-router-dom';
import styled from './App.module.css';

export const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const user = sessionStorage.getItem('user');

		if (!user) {
			return;
		}

		const readyUser = JSON.parse(user);

		dispatch(setUser(readyUser));
	}, []);

	const checkPage = () => {
		const checkPage1 = useMatch('/about-us');
		const checkPage2 = useMatch('/courses');
		const checkPage3 = useMatch('/media');
		const checkPage4 = useMatch('/media/:id');

		if (checkPage1 || checkPage2 || checkPage3 || checkPage4) {
			return (
				checkPage1?.pathname ||
				checkPage2?.pathname ||
				checkPage3?.pathname ||
				checkPage4?.pathname
			);
		} else {
			return 'unexist';
		}
	};

	const result = useMatch(checkPage());

	return (
		<>
			{result ? (
				<div className={styled.contentForLanding}>
					<HeaderLayout />
					<MainLayout />
					<FooterLayout />
				</div>
			) : (
				<div className={styled.contentForPage}>
					<HeaderLayout />
					<MainLayout />
				</div>
			)}
		</>
	);
};
