import { H, Button, Error } from '../../ui-components';
import styled from './Registration.module.css';

export const RegistrationLayout = ({
	onSubmit,
	formError,
	error,
	register,
	handleSubmit,
}) => {
	return (
		<>
			<div className={styled.wrapper}>
				<H H1>Регистрация</H>
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
					<input
						{...register('passcheck')}
						type="password"
						placeholder="Пароль"
					/>
					<Button blue2 disabled={formError} check={formError}>
						Зарегистрироваться
					</Button>
					{error ? <Error>{error}</Error> : null}
				</form>
			</div>
		</>
	);
};
