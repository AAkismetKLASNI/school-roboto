import { H } from '../../../../ui-components';
import styled from './Content.module.css';

export const ContentLayout = ({ title, imageUrl, content, publishedAt }) => {
	return (
		<div className={styled.wrapper}>
			<H>{title}</H>
			<img className={styled.banner} src={imageUrl} alt="" />
			<pre className={styled.content}>{content}</pre>
		</div>
	);
};
