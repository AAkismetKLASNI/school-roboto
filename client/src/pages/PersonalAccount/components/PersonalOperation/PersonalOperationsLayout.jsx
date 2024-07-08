import { Button } from '../../../../ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangeUserAsync } from '../../../../actions';
import { userIdSelector } from '../../../../selectors';
import styled from './PersonalOperations.module.css';

export const PersonalOperationsLayout = ({
	firstNameRef,
	lastNameRef,
	telephoneRef,
	emailRef,
	personalGender,
}) => {
	const userId = useSelector(userIdSelector);

	const dispatch = useDispatch();

	const sendDataUser = () => {
		const newDataUser = {
			firstname: firstNameRef.current.value,
			lastname: lastNameRef.current.value,
			telephone: telephoneRef.current.value,
			email: emailRef.current.value,
			gender: personalGender,
		};

		dispatch(fetchChangeUserAsync(newDataUser, userId));
	};

	return (
		<div className={styled.personalOperations}>
			<img
				src="https://i.postimg.cc/q7nfCJKq/avatar-user.png"
				border="0"
				alt="avatar-user"
			/>
			<Button orange1 onClick={sendDataUser}>
				Сохранить
			</Button>
		</div>
	);
};
