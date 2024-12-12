import ActorsTodo from "../../components/ActorsTodo/ActorsTodo";
import HookForm from "../../components/HookForm/HookForm";
import * as S from "./CreateFilm.Styled";

function AddFilm() {
	return (
		<S.CreateFilm>
			<HookForm />
			<ActorsTodo />
		</S.CreateFilm>
	);
}

export default AddFilm;
