import styled from "styled-components";
 
export const StyledError = styled.p<{ $error?: boolean }>`
	display: ${(error) => (error ? "flex" : "none")};
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.error};
	font-size: ${({ theme }) => theme.fontSize.small};
	padding: 0.5em 0 0 1.7em;
`;
