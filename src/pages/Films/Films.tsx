import { useEffect, useState } from "react";
import * as S from "./Films.styled";

import {
	Carousel,
	FilmsSearch,
	Toast,
	FilmsHeroImage,
	Button,
	MyFilm,
} from "../../components";

import useFormContext from "../../hooks/useFormContext";
import useActorContext from "../../hooks/useActorContext";

interface HeroImageType {
	backdropPath: string;
	originalTitle: string;
	overview: string;
}

function FilmsPage() {
	const { formData } = useFormContext();
	const { actorsList } = useActorContext();
	const [selectedGenre, setSelectedGenre] = useState(["Popular"]);
	const [fetchedFilms, setFetchedFilms] = useState([]);
	const [heroImage, setHeroImage] = useState<HeroImageType | null>(null);

	const URL_ROOT = import.meta.env.VITE_URL_ROOT;
	const API_KEY = import.meta.env.VITE_API_KEY;

	async function fetchData() {
		const genreId = selectedGenre[0] === "Popular" ? "" : selectedGenre[0];
		const URL = `${URL_ROOT}${API_KEY}&language=pl-PL${
			genreId ? `&with_genres=${genreId}` : ""
		}`;

		try {
			const res = await fetch(URL);
			const data = await res.json();
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

	useEffect(() => {}, [formData, actorsList]);

	useEffect(() => {
		fetchData();
	}, [selectedGenre]);

	return (
		<S.Films>
			{heroImage ? (
				<FilmsHeroImage
					heroImage={heroImage}
					alt="Page background composed of a poster of the most recent movie"
				/>
			) : (
				Toast.warning("Incorrect connection to the server")
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
			{formData && (
				<MyFilm
					filmImage={typeof formData.image === "string" ? formData.image : ""}
					text={formData.title}
					description={formData.description}
					year={formData.year}
				></MyFilm>
			)}
		</S.Films>
	);
}

export default FilmsPage;
