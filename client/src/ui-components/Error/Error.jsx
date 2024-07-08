import styled from './Error.module.css';

export const Error = ({ children }) => {
	return <p className={styled.error}>{children}</p>;
};
