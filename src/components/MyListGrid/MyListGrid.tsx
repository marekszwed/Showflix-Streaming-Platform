import useMovieContext from "../../hooks/useFavoriteMoviesContext";
import FavoriteCard from "../FavoriteCard";
import * as S from "./MyListGrid.styled";

function MyListGrid() {
	const { selectedMovie } = useMovieContext();

	return (
		<S.MyListGrid>
			{selectedMovie.map(({ image, title }) => (
				<FavoriteCard key={title} poster={image} />
			))}
		</S.MyListGrid>
	);
}

export default MyListGrid;
