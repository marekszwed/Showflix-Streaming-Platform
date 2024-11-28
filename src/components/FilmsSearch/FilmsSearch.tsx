import * as S from "./FIlmsSearch.Styled";
import { GenreProps } from "../../helpers/types";

interface Genres {
	id: string;
	text: string;
}

const genres: Genres[] = [
	{ id: "Popular", text: "Popularne" },
	{ id: "878", text: "Sci-Fi" },
	{ id: "53", text: "Thriller" },
	{ id: "27", text: "Horror" },
	{ id: "35", text: "Komedia" },
	{ id: "28", text: "Akcja" },
	{ id: "10752", text: "Wojenny" },
];

const checkGenre = (
	e: React.ChangeEvent<HTMLSelectElement>,
	setSelectedGenre: { (genres: string[]): void }
) => {
	const options = [e.target.value];
	setSelectedGenre(options);
};

function FilmsSearch({ selectedGenre, setSelectedGenre }: GenreProps) {
	return (
		<S.SelectBox>
			<S.Label htmlFor="species">Filmy</S.Label>
			<S.Select
				id="species"
				value={selectedGenre}
				onChange={(e) => {
					checkGenre(e, setSelectedGenre);
				}}
			>
				{genres.map(({ id, text }) => (
					<S.Option value={id}>{text}</S.Option>
				))}
			</S.Select>
		</S.SelectBox>
	);
}
export default FilmsSearch;
