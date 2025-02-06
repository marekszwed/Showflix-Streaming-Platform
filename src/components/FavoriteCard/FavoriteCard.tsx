import * as S from "./FavoriteCard.styled";

interface FavoriteCardProps {
	poster?: string;
}

function FavoriteCard({ poster }: FavoriteCardProps) {
	return <S.Card $poster={poster}></S.Card>;
}

export default FavoriteCard;
