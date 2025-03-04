import { useEffect, useState } from "react";
import * as S from "./MobileLoginButton.styled";
import { useTranslation } from "react-i18next";

function MobileLoginButton() {
	const { t } = useTranslation();

	const [isVisible, setIsVisible] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsVisible(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!isVisible) return null;
	return <S.MobileLoginButton href="/login" text={t("Global.login")} />;
}

export default MobileLoginButton;
