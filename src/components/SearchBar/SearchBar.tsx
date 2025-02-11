import * as S from "./SearchBar.styled";
import useSearchContext from "../../hooks/useSearchContext";

function SearchBar() {
	const { searchKeyword, setSearchKeyword } = useSearchContext();

	return (
		<S.Container>
			<S.Label htmlFor="search-bar">
				<S.Input
					id="search-bar"
					value={searchKeyword}
					onChange={(e) => setSearchKeyword(e.target.value)}
					placeholder="Wyszukaj film"
				/>
			</S.Label>
		</S.Container>
	);
}

export default SearchBar;
