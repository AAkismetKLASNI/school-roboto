import { PersonalAccountLayout } from './PersonalAccountLayout';
import { useState, useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { userGenderSelector } from '../../selectors';
import axios from 'axios';

export const PersonalAccountContainer = () => {
	const genderUser = useSelector(userGenderSelector);
	const [errorLogging, setErrorLogging] = useState(null);

	useLayoutEffect(() => {
		axios.get('/users/check-auth').then(({ data: { error } }) => {
			if (error) {
				setErrorLogging(error);
				return;
			}
		});
	}, []);

	const [personalGender, setPersonalGender] = useState(genderUser);

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const telephoneRef = useRef(null);
	const emailRef = useRef(null);

	const userInfo = {
		firstNameRef,
		lastNameRef,
		telephoneRef,
		emailRef,
		setPersonalGender,
		personalGender,
	};

	return errorLogging ? (
		<div>{errorLogging}</div>
	) : (
		<PersonalAccountLayout {...userInfo} />
	);
};
