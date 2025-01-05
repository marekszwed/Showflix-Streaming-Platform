import { useEffect, useState } from "react";
import * as S from "./Films.Styled";
import Carousel from "../../components/Carousel/Carousel";
import FilmsSearch from "../../components/FilmsSearch/FilmsSearch";
import Toast from "../../components/Toast/Toast";
import FilmsHeroContainer from "../../components/FilmsHeroImage/FilmsHeroImage";
import Button from "../../components/Button/Button";
import useFormAndTodo from "../../store/useFormAndTodo";
import MyFilm from "../../components/MyFilm/MyFilm";

function FilmsPage() {
	const { formData, actorsList } = useFormAndTodo();
	const [selectedGenre, setSelectedGenre] = useState(["Popular"]);
	const [fetchedFilms, setFetchedFilms] = useState([]);
	const [heroImage, setHeroImage] = useState<{
		backdropPath: string;
		originalTitle: string;
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
				setHeroImage({
					backdropPath: data.results[0]?.backdrop_path,
					originalTitle: data.results[0]?.original_title,
					overview: data.results[0]?.overview,
				});
			}
		} catch {
			Toast.warning("No connection to the server");
		}
	}

	useEffect(() => {
		console.log("Dane formularza:", formData);
		console.log("Lista aktorów:", actorsList);
	}, [actorsList, formData]);

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
			<Button
				href="/films/new"
				text={"Dodaj film"}
				width="10em"
				margin="0 0 3em 0"
			/>
			{formData
				? (() => {
						const { image, title, description, year } = formData;
						const customImage = typeof image === "string" ? image : "";
						return (
							<MyFilm
								filmImage={customImage}
								text={title}
								description={description}
								year={year}
							/>
						);
				  })()
				: null}
		</S.Films>
	);
}

export default FilmsPage;
