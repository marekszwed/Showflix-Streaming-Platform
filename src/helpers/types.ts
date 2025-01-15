export interface GenreProps {
	selectedGenre: string[];
	setSelectedGenre: (selected: string[]) => void;
}

export interface FormTypes {
	title: string;
	year?: number;
	description: string;
	image: FileList;
	imageUrl?: string;
}

export interface CardProps {
	id?: string;
	filmImage: string;
	text: string;
	year?: number;
	description: string;
}
