import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface PlayerContextProps {
	trailerURL: string | null;
	setTrailerToPlay: (movieId: string) => Promise<void>;
	closeTrailer: () => void;
}

interface VideoType {
	id: string;
	key: string;
	name: string;
	site: string;
	type: string;
}

interface ConstructURLTypes {
	movieId: string;
	apiKey: string;
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined);

const API_KEY = import.meta.env.VITE_API_KEY;

const VIDEO_TYPE_TRAILER = "Trailer";
const VIDEO_TYPE_YOUTUBE = "YouTube";

function contructURL({ movieId, apiKey }: ConstructURLTypes) {
	return `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
}

export const PlayerProvider = ({ children }: ProviderProps) => {
	const [trailerURL, setTrailerURL] = useState<string | null>(null);

	async function setTrailerToPlay(movieId: string) {
		const URL = contructURL({ movieId, apiKey: API_KEY });
		try {
			const res = await fetch(URL);
			const data = await res.json();
			const trailer = data.results.find(
				(video: VideoType) =>
					video.type === VIDEO_TYPE_TRAILER && video.site === VIDEO_TYPE_YOUTUBE
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
			value={{ trailerURL, setTrailerToPlay, closeTrailer }}
		>
			{children}
		</PlayerContext.Provider>
	);
};

export default PlayerContext;
