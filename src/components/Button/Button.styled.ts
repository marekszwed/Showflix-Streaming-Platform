import styled from "styled-components";
import { Pointer } from "../../styles/mixins";
import { NavLink } from "react-router-dom";

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	font-size: 1.6rem;
	text-decoration: none;
	border: none;
	border-radius: 1rem;
	padding: 1.12rem;
	color: ${({ theme }) => theme.colors.white100};
	background-color: ${({ theme }) => theme.color || theme.colors.red};
	transition: all 0.3s ease-out;
	${Pointer}

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.red100};
	}
`;

export const StyledNavlink = styled(NavLink)`
	text-decoration: none;
`;
