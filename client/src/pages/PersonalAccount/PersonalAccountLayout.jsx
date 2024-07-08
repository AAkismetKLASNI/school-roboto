import {
	PersonalOperationsLayout,
	PersonalInfoLayout,
	PersonalPanelLayout,
} from './components';
import styled from './PersonalAccount.module.css';

export const PersonalAccountLayout = (userInfo) => {
	return (
		<div className={styled.wrapper}>
			<PersonalOperationsLayout {...userInfo} />
			<PersonalInfoLayout {...userInfo} />
			<PersonalPanelLayout />
		</div>
	);
};
