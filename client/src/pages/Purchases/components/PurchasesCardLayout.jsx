import styled from './Purchases.module.css';

export const PurchasesCardLayout = ({ level, price, forWhat }) => {
	return (
		<div className={styled.purchasesCard}>
			<p>
				<span className={styled.goldText}>Курс:</span> {forWhat}
			</p>
			<p>
				<span className={styled.goldText}>Уровень:</span> {level}
			</p>
			<p>
				<span className={styled.goldText}>За:</span> {price}{' '}
				<span className={styled.goldText}>рублей</span>
			</p>
		</div>
	);
};
