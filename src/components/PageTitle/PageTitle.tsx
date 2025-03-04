import * as S from "./PageTitle.styled";

interface PageTitleProps {
	title: string;
}

function PageTitle({ title }: PageTitleProps) {
	return (
		<S.PageTitleContainer>
			<S.Title>{title}</S.Title>
		</S.PageTitleContainer>
	);
}

export default PageTitle;
