import * as S from "./HomePage.styled";
import showflixLogo from "/Showflix-logo.svg";

function HomePage() {
	return (
		<S.HomePageStyled>
			<S.HomePageLogo
				src={showflixLogo}
				alt="logo of the Showflix streaming platform"
			/>
			<S.PageTitle>Showflix</S.PageTitle>
			<S.PageDescription>Streaming Platform</S.PageDescription>
		</S.HomePageStyled>
	);
}

export default HomePage;
