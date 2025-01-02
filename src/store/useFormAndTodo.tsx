import { useContext } from "react";
import FormAndTodoContext from "./FormAndTodoContext";

const useFormAndTodo = () => {
	const context = useContext(FormAndTodoContext);
	if (!context) {
		throw new Error("useFormAndTodo must be used within a FormAndTodoProvider");
	}
	return context;
};

export default useFormAndTodo;
