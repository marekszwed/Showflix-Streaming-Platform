import { t } from "i18next";
import * as S from "./MyListLink.styled";
import { useLocation } from "react-router-dom";
import { NOT_ALLOWED_PATHS } from "../../constants/constants";

interface MyListLink {
	onClick: () => void;
}

function MyListLink({ onClick }: MyListLink) {
	const location = useLocation();

	if (NOT_ALLOWED_PATHS.includes(location.pathname)) {
		return null;
	} else {
		return (
			<S.Navlink to="/films/mylist" onClick={onClick}>
				{t("Global.myList")}
			</S.Navlink>
		);
	}
}

export default MyListLink;
