import styled from "styled-components";
import {
	BlankButton,
	InputMixin,
	LabelMixin,
	Pointer,
} from "../../styles/mixins";
import { device } from "../../styles/breakpoints";

export const TodoContainer = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	margin: 1.2rem 2rem 2rem 0;

	@media ${device.tablet} {
		margin: 1.2rem 0 2rem 0;
	}
`;

export const Todo = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 60rem;
`;

export const Label = styled.label`
	${LabelMixin}
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding-bottom: 0.7rem;
`;

export const InputForActor = styled.input`
	${InputMixin}
	box-sizing: border-box;
	margin: 1.2em 0 1em 0;
	padding: 0.5em 0 0.5em 0.5em;
`;

export const InputField = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	gap: 1em;
	width: 100%;
	flex-wrap: wrap;
`;

export const AddBtn = styled.button`
	padding: 0.5em 1em;
	width: 8em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	border-radius: 10px;
	border: none;
	${Pointer}
`;
export const ClearBtn = styled(AddBtn)`
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.colors.red};
`;
export const ActorsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 1.5em 0 1em;
	width: 100%;
`;

export const List = styled.ul`
	position: relative;
	list-style: none;
	width: 100%;
	padding: 0;
`;
export const ButtonsPanel = styled.div``;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1em;
	padding-left: 0.5em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	background-color: ${({ theme }) => theme.colors.white100};
	border-radius: 10px;
`;

export const Button = styled.button`
	${Pointer}
	${BlankButton}
	padding: 0.4em;
	margin-inline: 0.3em;
	border-radius: 10px;
	transition: scale 0.3s;
`;
