// import { useState } from "react";
import * as S from "./Select.Styled";
import { GenreProps } from "../../helpers/types";

function Select({ selectedGenre, setSelectedGenre }: GenreProps) {
	// const [selectedGenre, setSelectedGenre] = useState(["Sci-Fi"]);
	return (
		<S.SelectBox>
			<S.Label htmlFor="species">Gatunek</S.Label>
			<S.Select
				id="species"
				value={selectedGenre}
				onChange={(e) => {
					const options = [...e.target.selectedOptions];
					const values = options.map((option) => option.value);
					setSelectedGenre(values);
					console.log(values);
				}}
				// onChange={(e) => selectedGenre(e.target.value)}
			>
				<S.Option value="Sci-Fi">Sci-Fi</S.Option>
				<S.Option value="Thriller">Thriller</S.Option>
				<S.Option value="Horror">Horror</S.Option>
				<S.Option value="Comedy">Komedia</S.Option>
				<S.Option value="Action">Akcja</S.Option>
				<S.Option value="War">Wojenny</S.Option>
			</S.Select>
		</S.SelectBox>
	);
}
export default Select;
