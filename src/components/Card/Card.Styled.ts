import styled from "styled-components";

export const Card = styled.div<{ $filmImage?: string }>`
	position: relative;
	display: flex;
	max-width: 220px;
	height: 300px;
	background-position: center;
	background-size: cover;
	background-image: url(${(props) => props.$filmImage});
	border-radius: 10px;
	overflow: hidden;
`;

export const Button = styled.button`
	position: absolute;
	top: 10px;
	right: 20px;
	padding: 0.3em 0.3em;
	font-size: ${(props) => props.theme.fontSize.big};
	background-color: transparent;
	color: ${(props) => props.theme.colors.pureWhite};
	border: none;
	cursor: pointer;
	z-index: ${(props) => props.theme.zindex.positive};
`;

export const Text = styled.div<{ isActive?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 6.5em 2em;
	background-color: ${(props) => props.theme.colors.shadowBackground};
	color: ${(props) => props.theme.colors.pureWhite};
	clip-path: ${({ isActive }) =>
		isActive ? "circle(120% at 50% 90%)" : "circle(0 at 50% 90%);"};
	transition: clip-path 0.6s;
`;
export const Title = styled.h3`
	text-align: center;
	font-size: ${(props) => props.theme.fontSize.bigger};
	font-weight: bold;
	color: ${(props) => props.theme.colors.cardTitle};
`;

export const Description = styled.p`
	margin-top: 1.3em;
	font-size: ${(props) => props.theme.fontSize.normal};
	color: ${(props) => props.theme.colors.pureWhite};
	line-height: 1.7;
`;

export const CardContent = styled.div``;
