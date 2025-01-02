import * as S from "./ActorsTodo.Styled";
import { useState } from "react";
import useFormAndTodo from "../../store/useFormAndTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ActorsTodo() {
	const { actorsList, addActor, deleteActor, clearAll } = useFormAndTodo();
	const [newActor, setNewActor] = useState("");

	const handleAddActor = () => {
		addActor(newActor);
		setNewActor("");
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
					<S.AddBtn onClick={handleAddActor} disabled={newActor.trim() === ""}>
						Dodaj
					</S.AddBtn>
					<S.ClearBtn onClick={clearAll} disabled={actorsList.length === 0}>
						Usuń
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
	);
}

export default ActorsTodo;
