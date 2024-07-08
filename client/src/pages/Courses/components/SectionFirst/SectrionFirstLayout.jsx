import { H, Button } from '../../../../ui-components';
import { CourseCardLayout } from './components/CourseCardLayout';
import styled from './SectionFirst.module.css';

export const SectionFirstLayout = ({
	courses,
	onFilterRobotics,
	onFilterProgramming,
	onFilterAll,
}) => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.filterOperation}>
				<H>Увлекательный опыт ждет вас</H>
				<div>
					<Button white onClick={onFilterAll}>
						Все
					</Button>
					<Button white onClick={onFilterRobotics}>
						Робототехника
					</Button>
					<Button white onClick={onFilterProgramming}>
						Программирование
					</Button>
				</div>
			</div>
			<ul className={styled.coursesContainer}>
				{courses.map(({ id, ...props }) => {
					return <CourseCardLayout key={id} id={id} {...props} />;
				})}
			</ul>
		</div>
	);
};
