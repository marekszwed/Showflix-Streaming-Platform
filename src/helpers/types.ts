export interface Theme {
	colors: {
		pureWhite: string;
		PrimaryRed: string;
		btnHover: string;
		formBackground: string;
		shadowBackground: string;
		cardTitle: string;
		filmSelect: string;
		error: string;
	};
	fontSize: {
		small: string;
		normal: string;
		bigger: string;
		big: string;
		header: string;
	};
	fontWeight: {
		bold: string;
	};
	zindex: {
		negative: string;
		neutral: string;
		positive: string;
		positivePlus: string;
		notification: string;
		costam: string;
	};
}

export interface GenreProps {
	selectedGenre: string[];
	setSelectedGenre: (selected: string[]) => void;
}

