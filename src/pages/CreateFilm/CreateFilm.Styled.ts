import styled from "styled-components";
import { PageBackground } from "../../helpers/mixins";
import filmsBackground from "/films-background.jpg";

export const CreateFilm = styled.div`
	${PageBackground}
	justify-content: space-around;
	align-items: center;
	background-image: url(${filmsBackground});
	height: 100svh;
	flex-wrap: wrap;
`;


// export const Form = styled.form`
// 	position: relative;
// 	display: flex;
// 	width: 100%;
// 	max-width: 800px;
//   justify-content: space-between;
// 	border-radius: 10px;
// 	background-color: ${({ theme }) => theme.colors.brighterDark};
// 	overflow: hidden;

// 	max-height: 700px;
// `;

// export const Fieldset = styled.fieldset`
// 	position: relative;
// 	margin: 48px 68px;
//   width: 100%;

// `;

// export const Legend = styled.legend`
// 	font-size: ${({ theme }) => theme.fontSize.big};
// 	font-family: Helvetica, sans-serif;
// 	font-weight: ${({ theme }) => theme.fontWeight.bold};
// 	color: ${({ theme }) => theme.colors.pureWhite};
// 	padding-left: 0.5em;
// 	margin-bottom: 1em;
// `;

// export const InputField = styled.div`
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	flex-wrap: wrap;
// 	width: 250px;
// 	margin-bottom: 4em;
// `;

// export const Label = styled.label`
// 	display: flex;
// 	padding: 1em 1em;
// 	font-size: ${({ theme }) => theme.fontSize.normal};
// 	text-transform: uppercase;
// 	color: ${({ theme }) => theme.colors.pureWhite};
// 	overflow: hidden;
// `;

// export const Input = styled.input`
// 	display: flex;
// 	width: 100%;
// 	font-size: ${({ theme }) => theme.fontSize.normal};
// 	padding: 0.5em 1em;
// 	background-color: transparent;
// 	color: ${({ theme }) => theme.colors.pureWhite};
// 	border-radius: 5px;
// 	border: 2px solid transparent;
// 	overflow: hidden;

// 	&:focus {
// 		border: 2px solid ${({ theme }) => theme.colors.pureWhite};
// 	}
// `;
