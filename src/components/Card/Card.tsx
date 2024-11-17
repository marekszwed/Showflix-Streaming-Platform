import * as S from "./Card.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

interface CardProps {
	text: string;
	$filmImage: string;
	description: string;
	type: "button";
}

function Card({
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
		<S.Card $filmImage={$filmImage}>
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

{
	/* <S.Image src={filmImage}></S.Image>; */
}

{
	/* <S.CardContent>
	<S.Description></S.Description>
</S.CardContent>; */
}
