import { useContext } from "react";
import FavoriteMovieContext from "../context/FavoriteMoviesContext/FavoriteMoviesContext";

const useMovieContext = () => {
	const context = useContext(FavoriteMovieContext);
	if (!context) {
		throw new Error("useMovieContext must be used within a FavoriteProvider");
	}
	return context;
};

export default useMovieContext;
