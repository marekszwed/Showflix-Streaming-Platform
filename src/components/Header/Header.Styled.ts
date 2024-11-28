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
	padding: 2em 5em 2em 0;
	background-color: ${(props) =>
		props.isFilmPage ? props.theme.colors.mediumDark : "transparent"};
	z-index: ${(props) => props.theme.zindex.positivePlus};
`;

export const LogoStyled = styled.h1`
	display: flex;
	margin-left: 10em;
`;

export const TitleStyled = styled.div`
	font-size: ${(props) => props.theme.fontSize.header};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${(props) => props.theme.colors.pureWhite};
`;
