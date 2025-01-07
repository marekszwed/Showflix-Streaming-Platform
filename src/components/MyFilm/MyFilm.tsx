import { useState } from "react";
import * as S from "./MyFilm.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { CardProps } from "../../helpers/types";

function MyFilm({ filmImage, text, description, year }: CardProps) {
	const [isActive, setIsActive] = useState(false);

	const handleOpacityAnimation = () => {
		setIsActive(!isActive);
	};

	return (
		<S.MyFilmContainer $myFilmImage={filmImage}>
			<S.Button onClick={handleOpacityAnimation}>
				<FontAwesomeIcon icon={faCircleQuestion} />
			</S.Button>
			<S.MyFilmTextContainer $isAnimate={isActive}>
				<S.Title>{text}</S.Title>
				<S.Year>{year}</S.Year>
				<S.Description>{description}</S.Description>
			</S.MyFilmTextContainer>
		</S.MyFilmContainer>
	);
}

export default MyFilm;
