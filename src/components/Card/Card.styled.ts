import styled from "styled-components";
import {
	CardButton,
	CardDescription,
	CardTextAnimation,
	CardTitle,
	Pointer,
} from "../../styles/mixins";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { device } from "../../styles/breakpoints";

interface IconProps extends FontAwesomeIconProps {
	$changeColor?: boolean;
}

export const Card = styled.div<{ $filmImage?: string }>`
	position: relative;
	display: flex;
	max-width: 28rem;
	width: 100%;
	height: 40rem;
	background-position: center;
	background-size: cover;
	background-image: url(${({ $filmImage }) => $filmImage});
	border-radius: 10px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	overflow: hidden;
	${Pointer}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}

	@media ${device.mobileL} {
		max-width: 25rem;
		height: 30rem;
	}
`;

export const HeartButton = styled.button`
	${CardButton}
	${Pointer}
	top: 1rem;
	right: 1rem;
	transition: all 0.3s ease, box-shadow 0.3s ease;
	z-index: ${({ theme }) => theme.zindex.positivePlus};

	&:hover {
		transform: scale(1.2);
	}
`;

export const Icon = styled(FontAwesomeIcon)<IconProps>`
	color: ${({ $changeColor }) => ($changeColor ? "red" : "inherit")};
	transition: color 0.3s ease;
	${Pointer}
`;

export const PlayerButton = styled.button`
	${CardButton}
	${Pointer}
	top: 1rem;
	right: 6rem;
	transition: all 0.3s ease, box-shadow 0.3s ease;
	z-index: ${({ theme }) => theme.zindex.positivePlus};

	&:hover {
		transform: scale(1.2);
	}
`;

export const Text = styled.div<{ $isActive?: boolean }>`
	${CardTextAnimation}
	clip-path: circle(${({ $isActive }) =>
		$isActive ? "120%" : "0"} at 50% 90%);
`;

export const Title = styled.h3`
	${CardTitle}

	@media ${device.mobileL} {
		font-size: ${({ theme }) => theme.fontSize.belowBigger};
	}
`;

export const Year = styled.p`
	margin-top: 1em;
	font-size: ${({ theme }) => theme.fontSize.normal};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.yellow};
`;

export const Description = styled.p`
	${CardDescription}
`;
