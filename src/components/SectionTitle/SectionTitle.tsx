import * as S from "./SectionTitle.styled";

interface SectionTitleProps {
	title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
	return (
		<S.SectionTitleContainer>
			<S.Title>{title}</S.Title>
		</S.SectionTitleContainer>
	);
}

export default SectionTitle;
