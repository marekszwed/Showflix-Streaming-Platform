import * as S from "./Card.styled";
import { useState } from "react";
import imageFallback from "/card-grey-background.jpg";
import { CardProps } from "../../helpers/types";

function Card({ filmImage, text, description, year }: CardProps) {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<S.Card onClick={handleClick} $filmImage={filmImage || imageFallback}>
			<S.Text $isActive={isActive}>
				<S.Title>{text}</S.Title>
				{year && <S.Year>{year}</S.Year>}
				<S.Description>{description}</S.Description>
			</S.Text>
		</S.Card>
	);
}

export default Card;
