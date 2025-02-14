import * as S from "./Card.styled";
import { useState } from "react";
import imageFallback from "/card-grey-background.jpg";
import { CardProps } from "../../helpers/types";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import useMovieContext from "../../hooks/useFavoriteMoviesContext";
import usePlayerContext from "../../hooks/usePlayerContext";

function Card({ id, filmImage, text, description, year }: CardProps) {
	const [isActive, setIsActive] = useState(false);
	const { selectedMovies, toggleFavoriteMovies } = useMovieContext();
	const { fetchedTrailer } = usePlayerContext();

	const isFavorite = selectedMovies.some(({ title }) => title === text);

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation();
		toggleFavoriteMovies({
			title: text || "",
			image: filmImage || imageFallback,
		});
	};

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<S.Card onClick={handleClick} $filmImage={filmImage || imageFallback}>
			<S.Text $isActive={isActive}>
				<S.PlayerButton>
					{id && <S.Icon icon={faPlay} onClick={() => fetchedTrailer(id)} />}
				</S.PlayerButton>
				<S.HeartButton>
					<S.Icon
						icon={faHeart}
						$changeColor={isFavorite}
						onClick={toggleFavorite}
					/>
				</S.HeartButton>
				<S.Title>{text}</S.Title>
				{year && <S.Year>{year}</S.Year>}
				<S.Description>{description}</S.Description>
			</S.Text>
		</S.Card>
	);
}

export default Card;
