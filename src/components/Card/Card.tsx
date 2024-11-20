import * as S from "./Card.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import blank from "/card-grey-background.jpg";

interface CardProps {
	id: string;
	$filmImage: string;
	text: string;
	description: string;
	type: "button";
}

function Card({
	id,
	$filmImage,
	text,
	description,
	type,
}: CardProps): JSX.Element {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<S.Card id={id} $filmImage={$filmImage || blank}>
			<S.Button onClick={handleClick} type={type}>
				<FontAwesomeIcon icon={faCircleQuestion} />
			</S.Button>
			<S.Text isActive={isActive}>
				<S.Title>{text}</S.Title>
				<S.Description>{description}</S.Description>
			</S.Text>
		</S.Card>
	);
}

export default Card;
