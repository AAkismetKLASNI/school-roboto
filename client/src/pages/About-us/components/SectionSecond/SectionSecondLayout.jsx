import { H } from '../../../../ui-components';
import styled from './SectionSecond.module.css';

export const SectionSecondLayout = () => {
	return (
		<div className={styled.wrapper}>
			<H center={true}>Как проходит обучение</H>
			<div className={styled.firstSectrion}>
				<div className={styled.firstSectrionInfo}>
					<H H3>МЕНЬШЕ ТЕОРИИ - БОЛЬШЕ ПРАКТИКИ</H>
					<p>
						Наш подход обучение скоцентрирован на практическом применении всех
						полученных данных во время каждой лекции. При этом способ усвоения
						информации может быть как сюжетной игрой, так и увлекательным
						интерактивом
					</p>
				</div>
				<img
					src="https://i.postimg.cc/65pWGDp1/boy-putting-shelf-robot-1.png"
					border="0"
					alt="boy-putting-shelf-robot-1"
				/>
			</div>
			<div className={styled.secondSection}>
				<div className={styled.secondSectionItem}>
					<img
						src="https://i.postimg.cc/FKMqhJYQ/free-icon-font-gamepad-2-1.png"
						border="0"
						alt="free-icon-font-gamepad-2-1"
					/>
					<span>ИГРАЕМ</span>
				</div>
				<img
					src="https://i.postimg.cc/y8N2jHM2/Arrow-1.png"
					border="0"
					alt="Arrow-1"
				/>
				<div className={styled.secondSectionItem}>
					<img
						src="https://i.postimg.cc/7hDW281s/free-icon-font-book-alt-1-1.png"
						border="0"
						alt="free-icon-font-book-alt-1-1"
					/>
					<span>УЧИМ</span>
				</div>
				<img
					src="https://i.postimg.cc/y8N2jHM2/Arrow-1.png"
					border="0"
					alt="Arrow-1"
				/>
				<div className={styled.secondSectionItem}>
					<img
						src="https://i.postimg.cc/gcq5Pjdf/Group-21.png"
						border="0"
						alt="Group-21"
					/>
					<span>СОЗДАЕМ</span>
				</div>
			</div>
		</div>
	);
};
