import { constructURL } from "../../helpers/constructURL";
import * as S from "./FilmsHeroImage.styled";

interface BackgroundProps {
	heroImage: {
		backdropPath: string;
		originalTitle: string;
		overview: string;
	};
	alt: string;
}
 
function FilmsHeroImage({ heroImage, alt }: BackgroundProps) {
	const { backdropPath, originalTitle, overview } = heroImage;
	return (
		<S.FilmsHeroContainer>
			<S.FilmsHeroImage src={constructURL(backdropPath)} alt={alt} />
			<S.HeroInfoContainer>
				<S.Title>{originalTitle}</S.Title>
				<S.Description>{overview}</S.Description>
			</S.HeroInfoContainer>
		</S.FilmsHeroContainer>
	);
}

export default FilmsHeroImage;
