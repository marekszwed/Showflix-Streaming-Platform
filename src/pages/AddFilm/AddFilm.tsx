// import { useNavigate } from "react-router-dom";
import ActorsTodo from "../../components/ActorsTodo/ActorsTodo";
import Button from "../../components/Button/Button";
import HookForm from "../../components/HookForm/HookForm";
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
			<HookForm />
			<ActorsTodo />
			<Button
				id={"#"}
				type="submit"
				href="/films"
				onClick={handleAddToList}
				text={"Dodaj do listy"}
				width="10em"
				margin="0 10em 0 0"
			></Button>
		</S.AddFilm>
	);
}

export default AddFilm;
