import { createContext, ReactNode, useEffect, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface FavoriteMoviesType {
	title: string;
	image: string;
}

interface FavoriteMovie {
	selectedMovies: FavoriteMoviesType[];
	toggleFavoriteMovies: (movie: FavoriteMoviesType) => void;
}

const FavoriteMovieContext = createContext<FavoriteMovie | undefined>(
	undefined
);

export const FavoriteProvider = ({ children }: ProviderProps) => {
	const [selectedMovies, setSelectedMovie] = useState<FavoriteMoviesType[]>(
		() => JSON.parse(localStorage.getItem("selectedMovie") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("selectedMovie", JSON.stringify(selectedMovies));
	}, [selectedMovies]);

	const toggleFavoriteMovies = (movie: FavoriteMoviesType) => {
		const { title: movieTitle } = movie;

		setSelectedMovie((prevMovies) =>
			prevMovies.some(
				({ title: storedMovieTitle }) => storedMovieTitle === movieTitle
			)
				? prevMovies.filter(
						({ title: storedMovieTitle }) => storedMovieTitle !== movieTitle
				  )
				: [...prevMovies, movie]
		);
	};

	return (
		<FavoriteMovieContext.Provider
			value={{ selectedMovies, toggleFavoriteMovies }}
		>
			{children}
		</FavoriteMovieContext.Provider>
	);
};

export default FavoriteMovieContext;
