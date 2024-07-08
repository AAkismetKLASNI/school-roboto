import cx from 'classnames';
import styled from './ToggleSelection.module.css';

export const ToggleSelection = ({
	children,
	left,
	right,
	active,
	...props
}) => {
	return (
		<div
			{...props}
			className={cx(styled.default, {
				[styled['left']]: left,
				[styled['right']]: right,
				[styled['active']]: active,
			})}
		>
			{children}
		</div>
	);
};
