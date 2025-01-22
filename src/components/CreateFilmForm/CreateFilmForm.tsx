import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./CreateFilmForm.styled";
import { FormTypes } from "../../helpers/types";
import { Button, InputError } from "../../components";
import { userSchema } from "./schema";
import useFormContext from "../../hooks/useFormContext";

function CreateFilmForm() {
	const { setFormData } = useFormContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormTypes>({ resolver: yupResolver(userSchema) });

	const onSubmit = (data: FormTypes) => {
		setFormData(data);
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Fieldset>
				<S.InputContainer>
					<S.Label htmlFor="title">Tytuł filmu</S.Label>
					<S.Input {...register("title")} placeholder="Tytuł" />
					<InputError text={errors.title?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="description">Opis</S.Label>
					<S.Input {...register("description")} placeholder="Opis" />
					<InputError text={errors.description?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="year">Rok</S.Label>
					<S.Input type="number" {...register("year")} placeholder="Rok" />
					<InputError text={errors.year?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="image">Zdjęcie</S.Label>
					<S.Input
						type="file"
						{...register("image")}
						accept="image/jpeg, image.png, image/jpg"
					/>
					<InputError text={errors.image?.message} />
				</S.InputContainer>
				<Button type="submit" text="Zapisz dane" />
			</S.Fieldset>
		</S.Form>
	);
}

export default CreateFilmForm;
