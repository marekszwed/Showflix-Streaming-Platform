import useMovieContext from "../../hooks/useFavoriteMoviesContext";
import FavoriteCard from "../FavoriteCard";
import * as S from "./MyListGrid.styled";

function MyListGrid() {
	const { selectedMovies } = useMovieContext();

	return (
		<S.MyListGrid>
			{selectedMovies.map(({ image, title }) => (
				<FavoriteCard key={title} poster={image} />
			))}
		</S.MyListGrid>
	);
}

export default MyListGrid;
