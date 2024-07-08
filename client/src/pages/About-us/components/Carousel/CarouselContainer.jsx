import { Children, cloneElement, useEffect, useState } from 'react';
import { CarouselLayout } from './CarouselLayout';

const PAGE_WIDTH = 1320;

export const CarouselContainer = ({ children }) => {
	const [pages, setPages] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setPages(
			Children.map(children, (chield) => {
				return cloneElement(chield, {
					style: {
						height: '100%',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`,
					},
				});
			}),
		);
	}, [setPages]);

	const handleLeftArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + PAGE_WIDTH;

			return Math.min(newOffset, 0);
		});
	};

	const handleRigthArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - PAGE_WIDTH;

			const maxOffsetPages = -(PAGE_WIDTH * (pages.length - 1));

			return Math.max(newOffset, maxOffsetPages);
		});
	};

	return (
		<CarouselLayout
			pages={pages}
			offset={offset}
			handleRigthArrowClick={handleRigthArrowClick}
			handleLeftArrowClick={handleLeftArrowClick}
		/>
	);
};
