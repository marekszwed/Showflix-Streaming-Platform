import * as S from "./Card.styled";
import { useState } from "react";
import imageFallback from "/card-grey-background.jpg";
import { CardProps } from "../../helpers/types";

function Card({ id, filmImage, text, description }: CardProps): JSX.Element {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<S.Card
			id={id}
			onClick={handleClick}
			$filmImage={filmImage || imageFallback}
		>
			<S.Text $isActive={isActive}>
				<S.Title>{text}</S.Title>
				<S.Description>{description}</S.Description>
			</S.Text>
		</S.Card>
	);
}

export default Card;
