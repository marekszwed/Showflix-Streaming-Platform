import useMovieContext from "../../hooks/useFavoriteMoviesContext";
import useSearchContext from "../../hooks/useSearchContext";
import FavoriteCard from "../FavoriteCard";
import * as S from "./MyListGrid.styled";

function MyListGrid() {
	const { selectedMovies } = useMovieContext();
	const { searchKeyword } = useSearchContext();

	const filteredMovies = selectedMovies.filter(({ title }) =>
		title.toLowerCase().includes(searchKeyword.toLowerCase())
	);

	return (
		<S.MyListGrid>
			{filteredMovies.map(({ image, title }) => (
				<FavoriteCard key={title} poster={image} />
			))}
		</S.MyListGrid>
	);
}

export default MyListGrid;
