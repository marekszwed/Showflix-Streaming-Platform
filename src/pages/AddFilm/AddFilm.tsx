import * as S from "./AddFilm.styled";
import { Button, CreateFilmForm, ActorsTodo } from "../../components";
 
function AddFilm() {
	return (
		<S.AddFilm>
			<CreateFilmForm />
			<ActorsTodo />
			<S.ButtonContainer>
				<Button href="/films" text="Dodaj do listy" />
			</S.ButtonContainer>
		</S.AddFilm>
	);
}

export default AddFilm;
