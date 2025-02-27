import * as S from "./AddFilm.styled";
import { CreateFilmForm, ActorsTodo, Card } from "../../components";
import useFormContext from "../../hooks/useFormContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function AddFilm() {
	const { formData, clearData } = useFormContext();
	const [resetForm, setResetForm] = useState<() => void | undefined>();
	const { t } = useTranslation();

	const { title, description, imageUrl, year } = formData || {};

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
							text={title}
							description={description}
							filmImage={imageUrl}
							year={year}
						/>
					)}
				</S.PrototypeImageContainer>
				<S.ButtonContainer>
					<S.AddToListButton href="/films" text={t("Global.addToList")} />
					<S.EraseButton onClick={handleRemovePrototype}>
						{t("Global.clear")}
					</S.EraseButton>
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
