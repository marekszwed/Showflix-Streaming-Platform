import { useEffect, useState } from "react";
import * as S from "./Films.Styled";
import Carousel from "../../components/Carousel/Carousel";
import FilmsSearch from "../../components/FilmsSearch/FilmsSearch";
import Toast from "../../components/Toast/Toast";
import FilmsHeroContainer from "../../components/FilmsHeroImage/FilmsHeroImage";

function FilmsPage() {
	const [selectedGenre, setSelectedGenre] = useState(["Popular"]);
	const [fetchedFilms, setFetchedFilms] = useState([]);
	const [heroImage, setHeroImage] = useState<{
		backdrop_path: string;
		original_title: string;
		overview: string;
	} | null>(null);

	const URL_ROOT = import.meta.env.VITE_URL_ROOT;
	const URL_QUERY = import.meta.env.VITE_URL_QUERY;
	const API_KEY = import.meta.env.VITE_API_KEY;

	async function fetchData() {
		const genreId = selectedGenre[0] === "Popular" ? "" : selectedGenre[0];
		const URL = `${URL_ROOT + API_KEY + URL_QUERY}${
			genreId ? `&with_genres=${genreId}` : ""
		}`;

		try {
			const res = await fetch(URL);
			const data = await res.json();
			console.log(data.results);
			if (!data.results) {
				Toast.error("A problem has been encountered");
			} else {
				setFetchedFilms(data.results.slice(1, 20));
				setHeroImage(
					{
						backdrop_path: data.results[0]?.backdrop_path,
						original_title: data.results[0]?.original_title,
						overview: data.results[0]?.overview,
					}
					// `https://image.tmdb.org/t/p/original${data.results[0]?.backdrop_path}`
					// data.results[0]
				);
			}
		} catch {
			Toast.warning("No connection to the server");
		}
	}

	console.log();

	useEffect(() => {
		fetchData();
	}, [selectedGenre]);

	return (
		<S.Films>
			{heroImage && (
				<FilmsHeroContainer
					heroImage={heroImage}
					alt="Page background composed of a poster of the most recent movie"
				/>
			)}

			<FilmsSearch
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>
			<Carousel films={fetchedFilms} />
		</S.Films>
	);
}

export default FilmsPage;
