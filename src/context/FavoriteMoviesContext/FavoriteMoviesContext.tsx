import { createContext, ReactNode, useEffect, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface FavoriteMoviesType {
	title: string;
	image: string;
}

interface FavoriteMovie {
	selectedMovie: FavoriteMoviesType[];
	toggleFavoriteMovies: (movie: FavoriteMoviesType) => void;
}

const FavoriteMovieContext = createContext<FavoriteMovie | undefined>(
	undefined
);

export const FavoriteProvider = ({ children }: ProviderProps) => {
	const [selectedMovie, setSelectedMovie] = useState<FavoriteMoviesType[]>(() =>
		JSON.parse(localStorage.getItem("selectedMovie") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
	}, [selectedMovie]);

	const toggleFavoriteMovies = (movie: FavoriteMoviesType) => {
		setSelectedMovie((prevMovies) =>
			prevMovies.some((film) => film.title === movie.title)
				? prevMovies.filter((film) => film.title !== movie.title)
				: [...prevMovies, movie]
		);
	};

	return (
		<FavoriteMovieContext.Provider
			value={{ selectedMovie, toggleFavoriteMovies }}
		>
			{children}
		</FavoriteMovieContext.Provider>
	);
};

export default FavoriteMovieContext;
