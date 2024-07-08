import { H, Button, Error } from '../../ui-components';
import { Link } from 'react-router-dom';
import styled from './Authorization.module.css';

export const AuthorizationLayout = ({
	register,
	handleSubmit,
	formError,
	onSubmit,
	error,
}) => {
	return (
		<>
			<div className={styled.wrapper}>
				<H H1>Авторизация</H>
				<form
					className={styled.authorizationForm}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input {...register('email')} type="text" placeholder="Email" />
					<input
						{...register('password')}
						type="password"
						placeholder="Пароль"
					/>
					<Button blue2 disabled={formError} check={formError}>
						Авторизоваться
					</Button>
					<Link to="/registration">регистрация</Link>
					{error ? <Error>{error}</Error> : null}
				</form>
			</div>
		</>
	);
};
