import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface SearchContextProps {
	isSearch: string;
	setIsSearch: (data: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: ProviderProps) => {
	const [isSearch, setIsSearch] = useState("");

	return (
		<SearchContext.Provider value={{ isSearch, setIsSearch }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
