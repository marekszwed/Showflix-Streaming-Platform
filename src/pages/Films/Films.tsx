import { useEffect, useState } from "react";
// import axios from "axios";
import Carousel from "../../components/Carousel/Carousel";
// import { GenreHeader } from "../../components/FilmGenreHeader/GenreHeader.Styled";
// import Select from "../../components/Input/Select";
import { FilmsStyled } from "./Films.Styled";
import { GenreProps } from "../../helpers/types";
// import Card from "../../components/Card/Card";
// import image from "/the-dark-knight.jpg"

function Films({ selectedGenre }: GenreProps) {
	const apiKey = import.meta.env.VITE_API_KEY;
	const URL: string = `http://www.omdbapi.com/?apikey=${apiKey}&s=Batman`;

	const [films, setFilms] = useState([]);

	async function fetchData() {
		try {
			const res = await fetch(URL);
			if (!res) {
				console.error("Api data failure");
			} else {
				const data = await res.json;
				setFilms(data.Search || []);
			}
		} catch {
			console.error("Api data failure");
		}
	}

	useEffect(() => {
		fetchData();
	}, [selectedGenre]);

	return (
		<FilmsStyled>
			<Carousel />
		</FilmsStyled>
	);
}

export default Films;

{
	/* <Card
				$filmImage={image}
				text="Batman"
				description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, libero."
				sign="?"
				type={"button"}
			></Card> */
}
