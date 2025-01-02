import { constructURL } from "../../helpers/constructURL";
import Toast from "../Toast/Toast";
import * as S from "./FilmsHeroImage.Styled";

interface BackgroundProps {
	heroImage: {
		backdropPath: string;
		originalTitle: string;
		overview: string;
	};
	alt: string;
}

function FilmsHeroContainer({ heroImage, alt }: BackgroundProps) {
	if (!heroImage) {
		Toast.warning("Incorrect connection to the server");
		return null;
	}
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

export default FilmsHeroContainer;
