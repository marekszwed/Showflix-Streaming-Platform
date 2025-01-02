export interface Theme {
	colors: {
		white100: string;
		red: string;
		red100: string;
		dark: string;
		dark200: string;
		dark400: string;
		yellow: string;
		grey: string;
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

export interface FormTypes {
	title: string;
	year?: number;
	description: string;
	image: FileList | string | null;
}

export interface CardProps {
	id?: string;
	filmImage: string;
	text: string;
	year?: number;
	description: string;
	type?: "button";
}


