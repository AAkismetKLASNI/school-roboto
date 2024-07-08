import styled from './Purchases.module.css';
import { PurchasesCardLayout } from './components';
import { H } from '../../ui-components';

export const PurchasesLayout = ({ purchases }) => {
	return (
		<div className={styled.wrapper}>
			<H H2>Ваши покупки</H>
			{purchases.length ? (
				<ul className={styled.purchasesList}>
					{purchases.map(({ id, level, price, forWhat }) => {
						return (
							<PurchasesCardLayout
								key={id}
								id={id}
								level={level}
								price={price}
								forWhat={forWhat}
							/>
						);
					})}
				</ul>
			) : (
				<div>Вы ещё ничего не приобрели :&#40;</div>
			)}
		</div>
	);
};
