import { useEffect, useState } from "react";
import * as S from "./MobileLoginButton.styled";
import { useTranslation } from "react-i18next";

function MobileLoginButton() {
	const { t } = useTranslation();

	const [isVisible, setIsVisible] = useState(
		window.matchMedia("(max-width: 768px)").matches
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const handleResize = (event: MediaQueryListEvent) => {
			setIsVisible(event.matches);
		};
		mediaQuery.addEventListener("change", handleResize);
		return () => mediaQuery.removeEventListener("change", handleResize);
	}, []);

	if (!isVisible) return null;
	return <S.MobileLoginButton href="/login" text={t("Global.login")} />;
}

export default MobileLoginButton;
