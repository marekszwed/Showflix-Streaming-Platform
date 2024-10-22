import { styled } from 'styled-components';

const Form = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 450px;
	height: 750px;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.637);
	overflow: hidden;

	fieldset {
		position: relative;
		margin: 48px 68px;

		legend {
			font-size: 3.2rem;
			font-family: Helvetica, sans-serif;
			font-weight: bold;
			color: #ffffff;
			margin-bottom: 1em;
		}
	}

	div {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 315px;
		margin-bottom: 4em;
		border: 2px solid #cecece;
		border-radius: 10px;
		overflow: hidden;

		input {
			width: 100%;
			font-size: 1.6rem;
			padding: 0.5em 1em;
			background-color: transparent;
			border-radius: 5px;
			overflow: hidden;
		}

		&:focus {
			border: 3px solid #fff;
		}
	}

	button {
		font-size: 1.6rem;
		width: 100%;
		border: none;
		border-radius: 10px;
		padding: 0.5em 1em;
		color: #fff;
		background-color: #c11119;
		cursor: pointer;

		&:hover,
		&:focus {
			background-color: #b9111a;
		}
	}
`;

export default Form;
