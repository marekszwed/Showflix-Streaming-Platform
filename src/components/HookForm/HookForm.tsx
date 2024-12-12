import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button/Button";
import * as S from "./HookForm.Styled";
import { FormTypes } from "../../helpers/types";

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

function HookForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormTypes>({ resolver: yupResolver(userSchema) });

	const onSubmit = (data: FormTypes) => {
		console.log(data);
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Fieldset>
				<S.InputContainer>
					<S.Label htmlFor="title">Tytuł filmu</S.Label>
					<S.Input {...register("title")} placeholder="Tytuł"></S.Input>
					<S.Error>{errors.title?.message}</S.Error>
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="description">Opis</S.Label>
					<S.Input {...register("description")} placeholder="Opis"></S.Input>
					<S.Error>{errors.description?.message}</S.Error>
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="year">Rok</S.Label>
					<S.Input
						type="number"
						{...register("year")}
						placeholder="Rok"
					></S.Input>
					<S.Error>{errors.year?.message}</S.Error>
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="image">Zdjęcie</S.Label>
					<S.Input
						type="file"
						{...register("image")}
						accept="image/jpeg, image.png, image/jpg"
					></S.Input>
					<S.Error>{errors.image?.message}</S.Error>
				</S.InputContainer>

				<Button id="#" type="submit" text="Dodaj do listy"></Button>
			</S.Fieldset>
		</S.Form>
	);
}

export default HookForm;
