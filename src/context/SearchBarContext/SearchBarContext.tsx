import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface SearchContextProps {
	searchKeyword: string;
	setSearchKeyword: (data: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: ProviderProps) => {
	const [searchKeyword, setSearchKeyword] = useState("");

	return (
		<SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
