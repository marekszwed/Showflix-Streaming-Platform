import * as S from "./AddFilm.styled";
import { Button, CreateFilmForm, ActorsTodo, Card } from "../../components";
import useFormContext from "../../hooks/useFormContext";
import { useState } from "react";

function AddFilm() {
	const { formData, clearData } = useFormContext();
	const [resetForm, setResetForm] = useState<() => void | undefined>();

	const handleRemovePrototype = () => {
		if (resetForm) {
			resetForm();
		}
		clearData();
	};

	return (
		<S.AddFilm>
			<S.PrototypeContainer>
				<S.PrototypeImageContainer>
					{formData && (
						<Card
							text={formData.title}
							description={formData.description}
							filmImage={formData.imageUrl}
							year={formData.year}
						/>
					)}
				</S.PrototypeImageContainer>
				<S.ButtonContainer>
					<Button href="/films" width="100%" text="Dodaj do listy" />
					<S.EraseButton onClick={handleRemovePrototype}>Wyczyść</S.EraseButton>
				</S.ButtonContainer>
			</S.PrototypeContainer>
			<S.FilmInformationContainer>
				<CreateFilmForm setResetFunc={setResetForm} />
				<ActorsTodo />
			</S.FilmInformationContainer>
		</S.AddFilm>
	);
}

export default AddFilm;
