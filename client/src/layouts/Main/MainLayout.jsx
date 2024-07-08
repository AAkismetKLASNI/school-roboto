import { Routes, Route } from 'react-router-dom';
import {
	PrimaryLayout,
	AuthorizationContainer,
	PersonalAccountContainer,
	RegistrationContainer,
	CoursesContainer,
	AboutUsLayout,
	MediaContainer,
	TransitionContainer,
	PurchasesContainer,
	PostContainer,
} from '../../pages';
import { Container } from '../../ui-components';

export const MainLayout = () => {
	return (
		<main>
			<Container>
				<Routes>
					<Route path="/" element={<PrimaryLayout />} />
					<Route path="/about-us" element={<AboutUsLayout />} />
					<Route path="/courses" element={<CoursesContainer />} />
					<Route path="/media" element={<MediaContainer />} />
					<Route path="/media/:id" element={<PostContainer />} />
					<Route path="/authorization" element={<AuthorizationContainer />} />
					<Route path="/registration" element={<RegistrationContainer />} />
					<Route path="/transition/:id" element={<TransitionContainer />} />
					<Route
						path="/personal-account/purchases"
						element={<PurchasesContainer />}
					/>
					<Route
						path="/personal-account"
						element={<PersonalAccountContainer />}
					/>
					<Route
						path="*"
						element={<div>Такой страницы не существует :(</div>}
					/>
				</Routes>
			</Container>
		</main>
	);
};
