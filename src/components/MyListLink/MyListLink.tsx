import { t } from "i18next";
import * as S from "./MyListLink.styled";
import { useLocation } from "react-router-dom";

function MyListLink() {
	const location = useLocation();
	const NOT_ALLOWED_PATHS = ["/", "/login"];

	if (NOT_ALLOWED_PATHS.includes(location.pathname)) {
		return null;
	} else {
		return <S.Navlink to="/films/mylist">{t("Global.myList")}</S.Navlink>;
	}
}

export default MyListLink;
