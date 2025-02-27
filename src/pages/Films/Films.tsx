import { useEffect, useState } from "react";
import * as S from "./Films.styled";
import {
	Carousel,
	FilmsSearch,
	Toast,
	FilmsHeroImage,
	VideoPlayer,
	SectionTitle,
} from "../../components";
import useFormContext from "../../hooks/useFormContext";
import useActorContext from "../../hooks/useActorContext";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface HeroImageType {
	backdropPath: string;
	originalTitle: string;
	overview: string;
}

function FilmsPage() {
	const { i18n } = useTranslation();
	const { formData } = useFormContext();
	const { actorsList } = useActorContext();
	const [selectedGenre, setSelectedGenre] = useState(["Popular"]);
	const [fetchedFilms, setFetchedFilms] = useState([]);
	const [heroImage, setHeroImage] = useState<HeroImageType | null>(null);

	const URL_ROOT = import.meta.env.VITE_URL_ROOT;
	const API_KEY = import.meta.env.VITE_API_KEY;

	async function fetchData() {
		const genreId = selectedGenre[0] === "Popular" ? "" : selectedGenre[0];
		const language = i18n.language === "pl" ? "pl-PL" : "en-EN";
		const URL = `${URL_ROOT}${API_KEY}&language=${language}${
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

	const genreName = t(`Genres.${selectedGenre[0]}`);

	useEffect(() => {}, [formData, actorsList]);

	useEffect(() => {
		fetchData();
	}, [selectedGenre, i18n.language]);

	return (
		<S.Films>
			{heroImage && (
				<FilmsHeroImage
					heroImage={heroImage}
					alt="Page background composed of a poster of the most recent movie"
				/>
			)}

			<FilmsSearch
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>
			<SectionTitle title={genreName} />
			<Carousel films={fetchedFilms} />
			{formData && (
				<>
					<SectionTitle title={t("Global.myFilm")} />
					<S.MyNewFilmCard
						filmImage={formData.imageUrl}
						text={formData.title}
						description={formData.description}
						year={formData.year}
					/>
				</>
			)}
			<VideoPlayer />
		</S.Films>
	);
}

export default FilmsPage;
