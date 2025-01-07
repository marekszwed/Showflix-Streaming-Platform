import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./CreateFilmForm.Styled";
import { FormTypes } from "../../helpers/types";
import useFormAndTodo from "../../store/useFormAndTodo";
import Button from "../Button/Button";
import InputError from "../InputError/InputError";

const userSchema = yup.object({
	title: yup.string().required("Write a title").min(1),
	year: yup.number().min(1800).typeError("Year must be a number"),
	description: yup.string().required("Type something about your film"),
	image: yup
		.mixed<FileList>()
		.test("fileType", "Only images are allowed", (value) =>
			value && value.length > 0
				? ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
				: false
		)
		.required("Upload an image"),
});

function CreateFilmForm() {
	const { setFormData } = useFormAndTodo();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormTypes>({ resolver: yupResolver(userSchema) });

	const onSubmit = (data: FormTypes) => {
		setFormData(data);
		console.log(data);
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Fieldset>
				<S.InputContainer>
					<S.Label htmlFor="title">Tytuł filmu</S.Label>
					<S.Input {...register("title")} placeholder="Tytuł"></S.Input>
					<InputError text={errors.title?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="description">Opis</S.Label>
					<S.Input {...register("description")} placeholder="Opis"></S.Input>
					<InputError text={errors.description?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="year">Rok</S.Label>
					<S.Input
						type="number"
						{...register("year")}
						placeholder="Rok"
					></S.Input>
					<InputError text={errors.year?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="image">Zdjęcie</S.Label>
					<S.Input
						type="file"
						{...register("image")}
						accept="image/jpeg, image.png, image/jpg"
					></S.Input>
					<InputError text={errors.image?.message} />
				</S.InputContainer>
				<Button type="submit" text="Zapisz dane" />
			</S.Fieldset>
		</S.Form>
	);
}

export default CreateFilmForm;
