import { PayContainer } from './components';
import banner from '../../assets/img/transition/img_pay.png';
import styled from './Transition.module.css';

export const TransitionLayout = () => {
	return (
		<div className={styled.wrapper}>
			<PayContainer />
			<img className={styled.img} src={banner} alt="" />
		</div>
	);
};
