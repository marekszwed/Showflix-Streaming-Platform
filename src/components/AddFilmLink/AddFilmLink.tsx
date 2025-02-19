import { useLocation } from "react-router-dom";
import * as S from "./AddFilmLink.styled";
import { useTranslation } from "react-i18next";

function AddFilmLink() {
	const { t } = useTranslation();
	const location = useLocation();
	const NOT_ALLOWED_PATHS = ["/", "/login"];

	if (NOT_ALLOWED_PATHS.includes(location.pathname)) {
		return null;
	}

	return <S.Navlink to="/films/new">{t("Global.addFilm")}</S.Navlink>;
}

export default AddFilmLink;
