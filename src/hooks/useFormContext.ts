import { useContext } from "react";
import FormContext from "../context/FormContext/FormContext";

const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormAndTodo must be used within a FormAndTodoProvider");
	}
	return context;
};

export default useFormContext;
