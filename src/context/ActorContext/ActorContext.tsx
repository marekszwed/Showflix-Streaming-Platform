import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
	children: ReactNode;
}

interface ActorContextProps {
	actorsList: { name: string; id: number }[];
	addActor: (name: string) => void;
	deleteActor: (id: number) => void;
	clearAll: () => void;
}

const ActorContext = createContext<ActorContextProps | undefined>(undefined);

export const ActorProvider = ({ children }: ProviderProps) => {
	const [actorsList, setActorsList] = useState<ActorContextProps["actorsList"]>(
		[]
	);

	const addActor = (name: string) => {
		setActorsList([...actorsList, { id: Date.now(), name }]);
	};

	const deleteActor = (id: number) => {
		setActorsList(actorsList.filter((actor) => actor.id !== id));
	};

	const clearAll = () => {
		setActorsList([]);
	};

	return (
		<ActorContext.Provider
			value={{ actorsList, addActor, deleteActor, clearAll }}
		>
			{children}
		</ActorContext.Provider>
	);
};

export default ActorContext;
