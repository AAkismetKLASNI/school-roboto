import styled from './Loader.module.css';
import cx from 'classnames';

export const Loader = ({ page }) => {
	return (
		<div
			className={cx(styled.landing, {
				[styled['page']]: page,
			})}
		></div>
	);
};
