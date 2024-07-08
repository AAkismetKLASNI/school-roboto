import { SectionFirstContainer, SectionSecondContainer } from './components';
import styled from './Courses.module.css';

export const CoursesLayout = ({ ...props }) => {
	return (
		<div className={styled.wrapper}>
			<SectionFirstContainer {...props} />
			<SectionSecondContainer />
		</div>
	);
};
