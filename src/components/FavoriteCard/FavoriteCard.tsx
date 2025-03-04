import * as S from "./FavoriteCard.styled";

interface FavoriteCardProps {
	poster?: string;
	title?: string;
}

function FavoriteCard({ poster, title }: FavoriteCardProps) {
	return (
		<S.FavoriteCardContainer>
			<S.Card $poster={poster}></S.Card>
			<S.Title>{title}</S.Title>
		</S.FavoriteCardContainer>
	);
}

export default FavoriteCard;
