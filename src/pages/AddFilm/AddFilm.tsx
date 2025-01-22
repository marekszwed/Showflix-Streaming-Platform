import * as S from "./AddFilm.styled";
import { Button, CreateFilmForm, ActorsTodo } from "../../components";
 
function AddFilm() {
	return (
		<S.AddFilm>
			<S.ButtonContainer>
				<Button href="/films" text="Dodaj do listy" />
			</S.ButtonContainer>
			<S.FilmInformationContainer>
				<CreateFilmForm />
				<ActorsTodo />
			</S.FilmInformationContainer>
		</S.AddFilm>
	);
}

export default AddFilm;
