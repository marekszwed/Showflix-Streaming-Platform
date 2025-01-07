import ActorsTodo from "../../components/ActorsTodo/ActorsTodo";
import Button from "../../components/Button/Button";
import CreateFilmForm from "../../components/CreateFilmForm/CreateFilmForm";
import * as S from "./AddFilm.Styled";
import useFormAndTodo from "../../store/useFormAndTodo";

function AddFilm() {
	const { formData, actorsList } = useFormAndTodo();

	const handleAddToList = () => {
		if (!formData) {
			alert("Uzupełnij dane formularza!");
			return;
		}

		if (actorsList.length === 0) {
			alert("Dodaj przynajmniej jednego aktora!");
			return;
		}
		console.log("Dane formularza:", formData);
		console.log("Lista aktorów:", actorsList);
	};
	return (
		<S.AddFilm>
			<CreateFilmForm />
			<ActorsTodo />
			<S.ButtonContainer>
				<Button href="/films" onClick={handleAddToList} text="Dodaj do listy" />
			</S.ButtonContainer>
		</S.AddFilm>
	);
}

export default AddFilm;
