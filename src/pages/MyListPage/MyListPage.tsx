import { MyListGrid } from "../../components";
import SearchBar from "../../components/SearchBar";
import { SearchProvider } from "../../context/SearchBarContext/SearchBarContext";
import { MyFilmList } from "./MyListPage.styled";

function MyListPage() {
	return (
		<SearchProvider>
			<MyFilmList>
				<SearchBar />
				<MyListGrid />
			</MyFilmList>
		</SearchProvider>
	);
}

export default MyListPage;
