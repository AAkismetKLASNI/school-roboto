import { CoursesLayout } from './CoursesLauout';
import { useEffect, useState } from 'react';
import { Loader } from '../../ui-components';
import axios from 'axios';

export const CoursesContainer = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [courses, setCourses] = useState([]);
	const [filterCourses, setFilterCourses] = useState('');

	useEffect(() => {
		axios
			.get(`/courses?search=${filterCourses}`)
			.then(({ data: { courses } }) => {
				setCourses(courses);
				setTimeout(() => setIsLoading(false), 500);
			});
	}, [filterCourses]);

	const onFilterRobotics = () => setFilterCourses('Робототехника');

	const onFilterProgramming = () => setFilterCourses('Программирование');

	const onFilterAll = () => setFilterCourses('');

	return isLoading ? (
		<Loader />
	) : (
		<CoursesLayout
			courses={courses}
			onFilterRobotics={onFilterRobotics}
			onFilterProgramming={onFilterProgramming}
			onFilterAll={onFilterAll}
		/>
	);
};
