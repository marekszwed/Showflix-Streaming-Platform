import * as S from "./ActorsTodo.styled";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useActorContext from "../../hooks/useActorContext";
import { useTranslation } from "react-i18next";

function ActorsTodo() {
	const { actorsList, addActor, deleteActor, clearAll } = useActorContext();
	const [newActor, setNewActor] = useState("");
	const { t } = useTranslation();

	const handleAddActor = () => {
		addActor(newActor);
		setNewActor("");
	};

	return (
		<S.TodoContainer>
			<S.Todo>
				<S.InputField>
					<S.Label htmlFor="actor-input">{t("cast")}</S.Label>
					<S.InputForActor
						id="actor-input"
						name="actor"
						type="text"
						value={newActor}
						onChange={(e) => setNewActor(e.target.value)}
						placeholder={t("nameAndSurname")}
					/>
					<S.ButtonContainer>
						<S.AddBtn
							onClick={handleAddActor}
							disabled={newActor.trim() === ""}
						>
							{t("add")}
						</S.AddBtn>
						<S.ClearBtn onClick={clearAll} disabled={actorsList.length === 0}>
							{t("clear")}
						</S.ClearBtn>
					</S.ButtonContainer>
				</S.InputField>
				<S.ActorsContainer>
					<S.List>
						{actorsList.map((item) => (
							<S.ListItem key={item.id}>
								{item.name}
								<S.ButtonsPanel>
									<S.Button onClick={() => deleteActor(item.id)}>
										<FontAwesomeIcon icon={faTrash} />
									</S.Button>
								</S.ButtonsPanel>
							</S.ListItem>
						))}
					</S.List>
				</S.ActorsContainer>
			</S.Todo>
		</S.TodoContainer>
	);
}

export default ActorsTodo;
