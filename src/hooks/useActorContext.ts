import { useContext } from "react";
import ActorContext from "../context/ActorContext/ActorContext";

const useActorContext = () => {
	const context = useContext(ActorContext);
	if (!context) {
		throw new Error("useActorContext must be used within a ActorProvider");
	}
	return context;
};

export default useActorContext;
