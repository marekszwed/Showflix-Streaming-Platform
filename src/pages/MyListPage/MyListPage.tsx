import { useTranslation } from "react-i18next";
import { MyListGrid, PageTitle } from "../../components";
import SearchBar from "../../components/SearchBar";
import { SearchProvider } from "../../context/SearchBarContext/SearchBarContext";
import { MyFilmList } from "./MyListPage.styled";

function MyListPage() {
	const { t } = useTranslation();
	return (
		<SearchProvider>
			<MyFilmList>
				<PageTitle title={t("Global.myList")} />
				<SearchBar />
				<MyListGrid />
			</MyFilmList>
		</SearchProvider>
	);
}

export default MyListPage;
