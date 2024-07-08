import { useSelector } from 'react-redux';
import { ContentLayout } from './ContentLayout';
import { postSelector } from '../../../../selectors';

export const ContentContainer = () => {
	const post = useSelector(postSelector);

	return <ContentLayout {...post} />;
};
