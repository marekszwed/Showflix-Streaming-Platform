import { createContext, ReactNode, useState } from "react";
import { FormTypes } from "../../helpers/types";

interface ProviderProps {
	children: ReactNode;
}

interface FormContextProps {
	formData: FormTypes | null;
	setFormData: (data: FormTypes) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: ProviderProps) => {
	// const [formData, setFormDataState] = useState<FormTypes | null>(null);
	const [formData, setFormDataState] =
		useState<FormContextProps["formData"]>(null);

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

	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
