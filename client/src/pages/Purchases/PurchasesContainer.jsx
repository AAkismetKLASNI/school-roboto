import { useLayoutEffect, useState } from 'react';
import { PurchasesLayout } from './PurchasesLayout';
import { purchasesSelector } from '../../selectors';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const PurchasesContainer = () => {
	const [errorLogging, setErrorLogging] = useState(null);

	const purchases = useSelector(purchasesSelector);

	useLayoutEffect(() => {
		axios.get('/users/check-auth').then((checkData) => {
			if (checkData.data.error) {
				setErrorLogging(checkData.data.error);
				return;
			}
		});
	}, []);

	return (
		<>
			{errorLogging ? (
				<div>{errorLogging}</div>
			) : (
				<PurchasesLayout purchases={purchases.reverse()} />
			)}
		</>
	);
};
