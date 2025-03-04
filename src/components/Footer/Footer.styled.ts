import styled from "styled-components";

export const Footer = styled.footer`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white100};
`;
