import * as S from "./FilmsHeroImage.Styled";

interface BackgroundProps {
	heroImage: {
		backdrop_path: string;
		original_title: string;
		overview: string;
	};
	alt: string;
}

function FilmsHeroContainer({ heroImage, alt }: BackgroundProps) {
	if (!heroImage) {
		return null;
	}
	const { backdrop_path, original_title, overview } = heroImage;
	return (
		<S.FilmsHeroContainer>
			<S.FilmsHeroImage
				src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
				alt={alt}
			/>
			<S.HeroInfoContainer>
				<S.Title>{original_title}</S.Title>
				<S.Description>{overview}</S.Description>
			</S.HeroInfoContainer>
		</S.FilmsHeroContainer>
	);
}

export default FilmsHeroContainer;
