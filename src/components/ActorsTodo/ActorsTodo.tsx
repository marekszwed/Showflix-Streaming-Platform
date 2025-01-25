import * as S from "./ActorsTodo.styled";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useActorContext from "../../hooks/useActorContext";

function ActorsTodo() {
	const { actorsList, addActor, deleteActor, clearAll } = useActorContext();
	const [newActor, setNewActor] = useState("");

	const handleAddActor = () => {
		addActor(newActor);
		setNewActor("");
	};

	return (
		<S.TodoContainer>
			<S.Todo>
				<S.InputField>
					<S.Label>Obsada</S.Label>
					<S.InputForActor
						type="text"
						value={newActor}
						onChange={(e) => setNewActor(e.target.value)}
						placeholder="Imię i nazwisko"
					/>
					<S.ButtonContainer>
						<S.AddBtn
							onClick={handleAddActor}
							disabled={newActor.trim() === ""}
						>
							Dodaj
						</S.AddBtn>
						<S.ClearBtn onClick={clearAll} disabled={actorsList.length === 0}>
							Wyczyść
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
