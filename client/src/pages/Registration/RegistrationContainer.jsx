import { RegistrationLayout } from './RegistrationLayout';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const authorizationSceme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
			'Недопустимые символы в email',
		)
		.min('3', 'Минимум 3 символа для email')
		.required('Введите email'),
	password: yup
		.string()
		.min('6', 'Минимум 6 символов для пароля')
		.max('25', 'Максимум 25 символов для пароля')
		.required('Введите пароль'),
	passcheck: yup
		.string()
		.required('Введите повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export const RegistrationContainer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: '', password: '', passcheck: '' },
		resolver: yupResolver(authorizationSceme),
	});

	const navigate = useNavigate();

	const dispatch = useDispatch();
	const [serverError, setServerError] = useState(null);

	const formError =
		errors?.email?.message ||
		errors?.password?.message ||
		errors?.passcheck?.message;

	const error = formError || serverError;

	const onSubmit = ({ email, password }) => {
		axios
			.post('/register', { email, password })
			.then(({ data: { user, error } }) => {
				if (error) {
					setServerError('Пользователь с таким Email уже существует');
					return;
				}

				dispatch(setUser(user));
				sessionStorage.setItem('user', JSON.stringify(user));

				navigate('/personal-account');
			});
	};

	return (
		<RegistrationLayout
			register={register}
			handleSubmit={handleSubmit}
			error={error}
			formError={formError}
			onSubmit={onSubmit}
		/>
	);
};
