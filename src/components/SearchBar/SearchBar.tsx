import * as S from "./SearchBar.styled";
import useSearchContext from "../../hooks/useSearchContext";

function SearchBar() {
	const { isSearch, setIsSearch } = useSearchContext();

	return (
		<S.Container>
			<S.Label htmlFor="search-bar">
				<S.Input
					id="search-bar"
					value={isSearch}
					onChange={(e) => setIsSearch(e.target.value)}
					placeholder="Wyszukaj film"
				></S.Input>
			</S.Label>
		</S.Container>
	);
}

export default SearchBar;
