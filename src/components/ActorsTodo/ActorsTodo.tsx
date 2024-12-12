import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ActorsTodo.Styled";
import { useState } from "react";

interface TypesForActors {
	id: number;
	name: string;
}

function ActorsTodo() {
	const [actorsList, setActorsList] = useState<TypesForActors[]>([]);
	const [newActor, setNewActor] = useState("");

	const addActor = () => {
		if (newActor.trim() !== "") {
			const actorsObject = {
				id: Date.now(),
				name: newActor,
			};

			setActorsList([...actorsList, actorsObject]);
			setNewActor("");

			console.log(actorsList);
		}
	};

	const deleteActor = (id: number) => {
		setActorsList(actorsList.filter((item) => item.id !== id));
	};

	const clearAll = () => {
		setActorsList([]);
	};

	return (
		<S.Todo>
			<S.InputField>
				<S.InputForActor
					type="text"
					value={newActor}
					onChange={(e) => setNewActor(e.target.value)}
					placeholder="Dodaj aktora"
				/>
				<S.ButtonContainer>
					<S.AddBtn onClick={addActor}>Dodaj</S.AddBtn>
					<S.ClearBtn onClick={clearAll}>Usuń</S.ClearBtn>
				</S.ButtonContainer>
			</S.InputField>
			<S.ActorsContainer>
				<S.Ul>
					{actorsList.map((item) => (
						<S.Li key={item.id}>
							{item.name}
							<S.ButtonsPanel>
								<S.Button onClick={() => deleteActor(item.id)}>
									<FontAwesomeIcon icon={faTrash} />
								</S.Button>
							</S.ButtonsPanel>
						</S.Li>
					))}
				</S.Ul>
			</S.ActorsContainer>
		</S.Todo>
	);
}

export default ActorsTodo;
