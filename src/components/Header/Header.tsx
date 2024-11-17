import { useLocation } from "react-router-dom";
import { HeaderStyled, LogoStyled, TitleStyled } from "./Header.Styled";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { GenreProps } from "../../helpers/types";

function Header({ selectedGenre, setSelectedGenre }: GenreProps) {
	const location = useLocation();

	const showButton = () => {
		if (location.pathname === "/") {
			return (
				<Button
					id="#"
					type="button"
					href="/login"
					text="Zaloguj się"
					width="10em"
					margin="0 10em 0 0"
				></Button>
			);
		} else if (location.pathname === "/films") {
			return (
				<Button
					id="#"
					type="button"
					href="/"
					text="Wyloguj się"
					width="10em"
					margin="0 10em 0 0"
				></Button>
			);
		} else {
			return null;
		}
	};

	return (
		<>
			<HeaderStyled>
				<LogoStyled>
					<TitleStyled>showflix</TitleStyled>
				</LogoStyled>
				{showButton()}
				{location.pathname === "/films" ? (
					<Select
						selectedGenre={selectedGenre}
						setSelectedGenre={setSelectedGenre}
					/>
				) : null}
			</HeaderStyled>
		</>
	);
}

export default Header;
