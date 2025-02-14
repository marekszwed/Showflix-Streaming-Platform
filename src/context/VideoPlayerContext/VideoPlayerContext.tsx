import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface PlayerContextProps {
	trailerURL: string | null;
	fetchedTrailer: (movieId: string) => Promise<void>;
	closeTrailer: () => void;
}

interface VideoType {
	id: string;
	key: string;
	name: string;
	site: string;
	type: string;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

export const PlayerProvider = ({ children }: ProviderProps) => {
	const [trailerURL, setTrailerURL] = useState<string | null>(null);

	const API_KEY = import.meta.env.VITE_API_KEY;

	async function fetchedTrailer(movieId: string) {
		const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
		try {
			const res = await fetch(URL);
			const data = await res.json();
			console.log(data.results);
			const trailer = data.results.find(
				(video: VideoType) =>
					video.type === "Trailer" && video.site === "YouTube"
			);

			if (trailer) {
				setTrailerURL(
					`https://www.youtube.com/embed/${trailer.key}?autoplay=1`
				);
			} else {
				setTrailerURL(null);
			}
		} catch (error) {
			console.error("Error fetching", error);
			setTrailerURL(null);
		}
	}

	const closeTrailer = () => {
		setTrailerURL(null);
	};

	return (
		<PlayerContext.Provider
			value={{ trailerURL, fetchedTrailer, closeTrailer }}
		>
			{children}
		</PlayerContext.Provider>
	);
};

export default PlayerContext;
