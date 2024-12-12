import styled from "styled-components";

export const Card = styled.div<{ $filmImage?: string }>`
	position: relative;
	display: flex;
	max-width: 280px;
	height: 400px;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $filmImage }) => $filmImage});
	border-radius: 10px;
	overflow: hidden;
`;

export const Button = styled.button`
	position: absolute;
	top: 10px;
	right: 20px;
	padding: 0.3em 0.3em;
	font-size: ${({ theme }) => theme.fontSize.big};
	background-color: transparent;
	color: ${({ theme }) => theme.colors.pureWhite};
	border: none;
	cursor: pointer;
	z-index: ${({ theme }) => theme.zindex.positive};
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
	background-color: ${({ theme }) => theme.colors.almostDark};
	color: ${({ theme }) => theme.colors.pureWhite};
	clip-path: ${({ isActive }) =>
		isActive ? "circle(120% at 50% 90%)" : "circle(0 at 50% 90%);"};
	transition: clip-path 0.6s;
`;

export const Title = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.bigger};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.dirtyYellow};
`;

export const Description = styled.p`
	margin-top: 1.3em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.pureWhite};
	line-height: 1.7;
`;

export const CardContent = styled.div``;
