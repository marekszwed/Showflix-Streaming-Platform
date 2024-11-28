export interface Theme {
	colors: {
		pureWhite: string;
		PrimaryRed: string;
		btnHover: string;
		brighterDark: string;
		mediumDark: string;
		almostDark: string;
		dirtyYellow: string;
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
		normal: string;
		bold: string;
	};
	zindex: {
		negative: string;
		neutral: string;
		positive: string;
		positivePlus: string;
		positiveMax: string;
		notification: string;
		maxIndex: string;
	};
}

export interface GenreProps {
	selectedGenre: string[];
	setSelectedGenre: (selected: string[]) => void;
}
