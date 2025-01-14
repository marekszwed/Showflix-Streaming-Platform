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
	padding: 2em 5em 2.5em 0;
	background-color: ${(props) =>
		props.isFilmPage ? props.theme.colors.dark400 : "transparent"};
	z-index: ${({ theme }) => theme.zindex.positivePlus};
`;
 
export const LogoStyled = styled.h1`
	display: flex;
	margin-left: 5em;
`;

export const TitleStyled = styled.div`
	font-size: ${({ theme }) => theme.fontSize.header};
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.white100};
`;
