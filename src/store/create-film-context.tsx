import { createContext } from "react";

interface TypesForActors {
	id: number;
	name: string;
}

interface CreateFilmContextTypes {
	actorsList: TypesForActors[];
	addActor: (name: string) => void;
	deleteActor: (id: number) => void;
	clearAll: () => void;
}

export const CreateFilmContext = createContext<
	CreateFilmContextTypes | undefined
>(undefined);
