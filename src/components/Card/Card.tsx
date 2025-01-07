import * as S from "./Card.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import imageFallback from "/card-grey-background.jpg";
import { CardProps } from "../../helpers/types";

function Card({ id, filmImage, text, description }: CardProps): JSX.Element {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<S.Card id={id} $filmImage={filmImage || imageFallback}>
			<S.Button onClick={handleClick}>
				<FontAwesomeIcon icon={faCircleQuestion} />
			</S.Button>
			<S.Text $isActive={isActive}>
				<S.Title>{text}</S.Title>
				<S.Description>{description}</S.Description>
			</S.Text>
		</S.Card>
	);
}

export default Card;
