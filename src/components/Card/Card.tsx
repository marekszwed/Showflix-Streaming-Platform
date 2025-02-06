import * as S from "./Card.styled";
import { useState } from "react";
import imageFallback from "/card-grey-background.jpg";
import { CardProps } from "../../helpers/types";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useMovieContext from "../../hooks/useFavoriteMoviesContext";

function Card({ filmImage, text, description, year }: CardProps) {
	const [isActive, setIsActive] = useState(false);
	const { selectedMovie, toggleFavoriteMovies } = useMovieContext();

	const isFavoriteToChangeColor = selectedMovie.some(
		(fav) => fav.title === text
	);

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation();
		toggleFavoriteMovies({
			title: text || "",
			image: filmImage || imageFallback,
		});
		console.log(selectedMovie);
	};

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<S.Card onClick={handleClick} $filmImage={filmImage || imageFallback}>
			<S.Text $isActive={isActive}>
				<S.Button>
					<S.Icon
						icon={faHeart}
						$changeColor={isFavoriteToChangeColor}
						onClick={(e) => toggleFavorite(e)}
					/>
				</S.Button>
				<S.Title>{text}</S.Title>
				{year && <S.Year>{year}</S.Year>}
				<S.Description>{description}</S.Description>
			</S.Text>
		</S.Card>
	);
}

export default Card;
