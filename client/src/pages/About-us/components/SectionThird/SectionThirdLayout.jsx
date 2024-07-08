import { H, Button } from '../../../../ui-components';
import styled from './SectionThird.module.css';

export const SectionThirdLayout = () => {
	return (
		<div className={styled.wrapper}>
			<H center={true}>По окончанию обучения дети смогут</H>
			<div className={styled.firstSection}>
				<img
					src="https://i.postimg.cc/R006vXWj/Rectangle-10.png"
					border="0"
					alt="Rectangle-10"
				/>
				<ol className={styled.firstSectionInfo}>
					<li>
						<H H3>
							Разбираться в современных тенденциях робототехники и проектировать
							гаджеты для Умного Дома
						</H>
					</li>
					<li>
						<H H3>
							Разрабатывать интернет-сайты, моделировать и программировать
						</H>
					</li>
					<li>
						<H H3>
							Использовать компьютер как инструмент интеллектуального развития и
							творческого самовыражения
						</H>
					</li>
				</ol>
			</div>
			<div className={styled.secondSection}>
				<H H1>Попробовать бесплатное занятие</H>
				<Button blue2 link="/courses">
					БЕСПЛАТНОЕ ЗАНЯТИЕ
				</Button>
			</div>
		</div>
	);
};
