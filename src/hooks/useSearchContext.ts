import { useContext } from "react";
import SearchContext from "../context/SearchBarContext/SearchBarContext";

const useSearchContext = () => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearchContext must be used within a SearchProvider");
	}
	return context;
};

export default useSearchContext;
