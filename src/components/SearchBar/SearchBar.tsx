import * as S from "./SearchBar.styled";
import useSearchContext from "../../hooks/useSearchContext";
import { useTranslation } from "react-i18next";

function SearchBar() {
	const { t } = useTranslation();
	const { searchKeyword, setSearchKeyword } = useSearchContext();

	return (
		<S.Container>
			<S.Label htmlFor="search-bar">
				<S.Input
					id="search-bar"
					value={searchKeyword}
					onChange={(e) => setSearchKeyword(e.target.value)}
					placeholder={`🏸 ${t("Global.searchMovie")}`}
				/>
			</S.Label>
		</S.Container>
	);
}

export default SearchBar;
