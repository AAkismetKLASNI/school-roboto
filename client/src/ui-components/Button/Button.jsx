import cx from 'classnames';
import { Link } from 'react-router-dom';
import styled from './Button.module.css';

export const Button = ({
	children,
	link = '',
	check,
	blue1,
	blue2,
	orange1,
	orange2,
	white,
	unactive,
	...props
}) => {
	return (
		<>
			<button
				{...props}
				className={cx(styled.btn, {
					[styled['blue1']]: blue1,
					[styled['blue2']]: blue2,
					[styled['orange1']]: orange1,
					[styled['orange2']]: orange2,
					[styled['white']]: white,
					[styled['link']]: link,
					[styled['check']]: check,
					[styled['unactive']]: unactive,
				})}
			>
				{link ? <Link to={link}>{children}</Link> : <>{children}</>}
			</button>
		</>
	);
};
