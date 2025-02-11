import styled from "styled-components";

export const HeaderStyled = styled.header<{
	color?: string;
	isFilmPage?: boolean;
}>`
	position: fixed;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 100%;
	padding: 0.6em 5em 0.6em 0;
	background-color: ${({ theme, isFilmPage }) =>
		isFilmPage ? theme.colors.black : "transparent"};
	z-index: ${({ theme }) => theme.zindex.positiveMax};
`;

export const HeaderNavItems = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`;
