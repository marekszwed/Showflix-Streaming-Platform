import { useTranslation } from "react-i18next";
import * as S from "./LanguageSelector.styled";

const languages = [
	{ code: "en", text: "EN" },
	{ code: "pl", text: "PL" },
];

interface LanguageSelectorProps {
	onClick: () => void;
}
function LanguageSelector({ onClick }: LanguageSelectorProps) {
	const { i18n } = useTranslation();

	const chooseLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLang = e.target.value;
		i18n.changeLanguage(selectedLang);
		console.log(i18n.language);
		onClick();
	};

	return (
		<S.SelectorBox>
			<S.Label htmlFor="language-select" />
			<S.Select
				id="language-select"
				value={i18n.language}
				onChange={chooseLanguage}
			>
				{languages.map(({ code, text }) => (
					<S.Option key={code} value={code}>
						{text}
					</S.Option>
				))}
			</S.Select>
		</S.SelectorBox>
	);
}

export default LanguageSelector;
