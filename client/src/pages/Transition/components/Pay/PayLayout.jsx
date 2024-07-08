import { H, Button, ToggleSelection, Error } from '../../../../ui-components';
import styled from './Pay.module.css';

export const PayLayout = ({
	id,
	forWhat,
	level,
	updatePrice,
	option,
	toggleOption,
	purchaseCourse,
	error,
}) => {
	return (
		<div className={styled.wrapper}>
			<H>Оплата курса</H>
			<p>Индификатор товара: {id}</p>
			<p>
				Название товара: {forWhat} - «{level}»
			</p>
			<p>Опция:</p>
			<div className={styled.toggleOptions}>
				<ToggleSelection
					left
					active={option === 1}
					onClick={() => toggleOption(1)}
				>
					1 мес
				</ToggleSelection>
				<ToggleSelection active={option === 6} onClick={() => toggleOption(6)}>
					6 мес
				</ToggleSelection>
				<ToggleSelection
					right
					active={option === 12}
					onClick={() => toggleOption(12)}
				>
					12 мес
				</ToggleSelection>
			</div>
			<p className={styled.goldText}>Первое занятие бесплатно!</p>
			<p>Итого: {updatePrice}</p>
			<div className={styled.sectionPay}>
				<Button
					orange2
					onClick={purchaseCourse}
					link="/personal-account/purchases"
				>
					Оплатить
				</Button>
				<Error>{error}</Error>
			</div>
		</div>
	);
};
