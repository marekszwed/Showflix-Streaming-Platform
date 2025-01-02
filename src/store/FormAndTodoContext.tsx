import { createContext, ReactNode, useState } from "react";
import { FormTypes } from "../helpers/types";

interface FormAndTodoContextProps {
	formData: FormTypes | null;
	setFormData: (data: FormTypes) => void;
	actorsList: { name: string; id: number }[];
	addActor: (name: string) => void;
	deleteActor: (id: number) => void;
	clearAll: () => void;
}

const FormAndTodoContext = createContext<FormAndTodoContextProps | undefined>(
	undefined
);

export const FormAndTodoProvider = ({ children }: { children: ReactNode }) => {
	const [formData, setFormDataState] = useState<FormTypes | null>(null);
	const [actorsList, setActorsList] = useState<{ name: string; id: number }[]>(
		[]
	);

	const setFormData = (data: FormTypes) => {
		const imageUrl =
			data.image instanceof FileList && data.image.length > 0
				? URL.createObjectURL(data.image[0])
				: "";

		setFormDataState({
			...data,
			image: imageUrl,
		});
	};

	const addActor = (name: string) => {
		if (name.trim() !== "") {
			setActorsList([...actorsList, { id: Date.now(), name }]);
		} else {
			console.warn("Actor name cannot be empty");
		}
	};

	const deleteActor = (id: number) => {
		setActorsList(actorsList.filter((actor) => actor.id !== id));
	};

	const clearAll = () => {
		setActorsList([]);
	};

	return (
		<FormAndTodoContext.Provider
			value={{
				formData,
				setFormData,
				actorsList,
				addActor,
				deleteActor,
				clearAll,
			}}
		>
			{children}
		</FormAndTodoContext.Provider>
	);
};

export default FormAndTodoContext;
