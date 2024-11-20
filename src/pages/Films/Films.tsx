import { useEffect, useState } from "react";
import * as S from "./Films.Styled";
import Carousel from "../../components/Carousel/Carousel";
import FilmsHeroImage from "../../components/FilmsBackground/FilmsBackground";
import FilmsSearch from "../../components/FilmsSearch/FilmsSearch";

function Films() {
	const [selectedGenre, setSelectedGenre] = useState(["Sci-Fi"]);
	const [fetchedFilms, setFetchedFilms] = useState([]);
	const [heroImage, setHeroImage] = useState<string>("");

	const urlLeftSide = import.meta.env.VITE_URL_LEFT_SIDE;
	const urlRightSide = import.meta.env.VITE_URL_RIGHT_SIDE;
	const API_KEY = import.meta.env.VITE_API_KEY;

	const URL = `${urlLeftSide + API_KEY + urlRightSide}`;

	async function fetchData() {
		try {
			const res = await fetch(URL);
			const data = await res.json();
			console.log(data.results);
			if (!data.results) {
				console.error("somethings wrong");
			} else {
				setFetchedFilms(data.results);
				setHeroImage(
					`https://image.tmdb.org/t/p/original${data.results[0]?.backdrop_path}`
				);
			}
		} catch {
			console.error("Loading data failure");
		}
	}

	useEffect(() => {
		fetchData();
	}, [selectedGenre]);

	return (
		<S.Films>
			<FilmsHeroImage src={heroImage} alt="hero image" />
			<FilmsSearch
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>
			<Carousel films={fetchedFilms} />
		</S.Films>
	);
}

export default Films;
