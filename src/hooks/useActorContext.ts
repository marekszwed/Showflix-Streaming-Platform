import { useContext } from "react";
import ActorContext from "../context/ActorContext/ActorContext";

const useActorContext = () => {
	const context = useContext(ActorContext);
	if (!context) {
		throw new Error("useFormAndTodo must be used within a FormAndTodoProvider");
	}
	return context;
};

export default useActorContext;
