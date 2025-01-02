import styled from "styled-components";
import { BlankButton, Pointer } from "../../helpers/mixins";

export const Todo = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-self: center;
	max-width: 300px;
`;

export const InputForActor = styled.input`
	display: flex;
	padding: 0.2em 1em;
	margin-bottom: 1em;
	font-size: ${({ theme }) => theme.fontSize.bigger};
	border-radius: 10px;
	max-width: 100%;
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
	justify-content: space-between;
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
	color: ${({ theme }) => theme.colors.red};
`;
export const ActorsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 1.5em 1em 1em 1em;
	width: 100%;
`;

export const List = styled.ul`
	list-style: none;
	width: 100%;
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
