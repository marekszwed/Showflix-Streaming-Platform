import styled from "styled-components";

export const StyledButton = styled.button<{
	$width?: string;
	$margin?: string;
}>`
	display: flex;
	justify-content: center;
	font-size: 1.6rem;
	text-decoration: none;
	width: ${(props) => props.$width || "auto"};
	margin: ${(props) => props.$margin || "auto"};
	border: none;
	border-radius: 10px;
	padding: 0.7em;
	color: ${({ theme }) => theme.colors.pureWhite};
	background-color: ${({ theme }) => theme.color || theme.colors.PrimaryRed};
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.btnHover};
	}
`;
