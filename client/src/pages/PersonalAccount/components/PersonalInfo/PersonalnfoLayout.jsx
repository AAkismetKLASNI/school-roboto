import { useSelector } from 'react-redux';
import { userSelector } from '../../../../selectors';
import styled from './PersonalInfo.module.css';
import { useState } from 'react';

export const PersonalInfoLayout = ({
	firstNameRef,
	lastNameRef,
	telephoneRef,
	emailRef,
	setPersonalGender,
	personalGender,
}) => {
	const [toggleToChangeEmail, setToggleToChangeEmail] = useState(false);

	const user = useSelector(userSelector);

	const { firstname, lastname, telephone, email } = user;

	return (
		<div className={styled.personalInfo}>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Имя</span>
				<input
					type="text"
					className={styled.openField}
					defaultValue={firstname}
					ref={firstNameRef}
				/>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Фамилия</span>
				<input
					type="text"
					className={styled.openField}
					defaultValue={lastname}
					ref={lastNameRef}
				/>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Телефон</span>
				<input
					type="text"
					className={styled.openField}
					defaultValue={telephone}
					ref={telephoneRef}
				/>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Пол</span>
				<div className={styled.toggleGender}>
					<div
						className={
							personalGender === 'man'
								? `${styled.menGender} ${styled.activeGender}`
								: styled.menGender
						}
						onClick={() => setPersonalGender('man')}
					>
						Мужской
					</div>
					<div
						className={
							personalGender === 'woman'
								? `${styled.womenGender} ${styled.activeGender}`
								: styled.womenGender
						}
						onClick={() => setPersonalGender('woman')}
					>
						Женский
					</div>
				</div>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Email</span>
				<input
					type="email"
					className={toggleToChangeEmail ? styled.openField : styled.closeField}
					defaultValue={email}
					ref={emailRef}
				/>
				<span
					className={styled.personalChangeData}
					onClick={() => setToggleToChangeEmail(!toggleToChangeEmail)}
				>
					{toggleToChangeEmail ? 'закрыть' : 'открыть'}
				</span>
			</div>
		</div>
	);
};
