import { useState } from 'react';
import { PayLayout } from './PayLayout';
import { useSelector, useDispatch } from 'react-redux';
import { setPurchases } from '../../../../actions';
import axios from 'axios';

export const PayContainer = () => {
	const dispatch = useDispatch();

	const [error, setError] = useState('');
	const [option, setOption] = useState(1);

	const course = useSelector((store) => store.course);

	const { id, price, forWhat, level } = course;

	const updatePrice = price * option;

	const toggleOption = (mode) => {
		setOption(mode);
	};

	const purchaseCourse = () => {
		axios
			.post(`/purchases/${id}`, {
				data: { price: updatePrice, forWhat, level },
			})
			.then(({ data: { error, user } }) => {
				if (error) {
					setError(error);
					return;
				}

				const { purchases } = user;

				dispatch(setPurchases(purchases));

				sessionStorage.setItem('user', JSON.stringify({ ...user }));
			});
	};

	return (
		<PayLayout
			{...course}
			option={option}
			toggleOption={toggleOption}
			updatePrice={updatePrice}
			purchaseCourse={purchaseCourse}
			error={error}
		/>
	);
};
