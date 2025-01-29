import * as S from "./FIlmsSearch.styled";
import { GenreProps } from "../../helpers/types";
import { useTranslation } from "react-i18next";

interface Genres {
	id: string;
}

const genres: Genres[] = [
	{ id: "Popular" },
	{ id: "878" },
	{ id: "53" },
	{ id: "27" },
	{ id: "35" },
	{ id: "28" },
	{ id: "10752" },
];

function FilmsSearch({ selectedGenre, setSelectedGenre }: GenreProps) {
	const { t } = useTranslation();
	return (
		<S.SelectBox>
			<S.Label htmlFor="species">{t("films")}</S.Label>
			<S.Select
				id="species"
				value={selectedGenre}
				onChange={(e) => setSelectedGenre([e.target.value])}
			>
				{genres.map(({ id }) => (
					<S.Option value={id}>{t(`genres.${id}`)}</S.Option>
				))}
			</S.Select>
		</S.SelectBox>
	);
}

export default FilmsSearch;
