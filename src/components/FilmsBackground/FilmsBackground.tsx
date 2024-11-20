import * as S from "./FilmsBackground.Styled";

interface BackgroundProps {
	src: string;
	alt: string;
}

function FilmsHeroImage({ src, alt }: BackgroundProps) {
	return <S.FIlmsHeroImage src={src} alt={alt} />;
}

export default FilmsHeroImage;
