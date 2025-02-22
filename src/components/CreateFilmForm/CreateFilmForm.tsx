import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./CreateFilmForm.styled";
import { FormTypes } from "../../helpers/types";
import { InputError } from "../../components";
import { userSchema } from "./schema";
import useFormContext from "../../hooks/useFormContext";
import { useTranslation } from "react-i18next";

interface resetProp {
	setResetFunc: (resetFunc: () => void) => void;
}

function CreateFilmForm({ setResetFunc }: resetProp) {
	const { setFormData } = useFormContext();
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormTypes>({
		resolver: yupResolver(userSchema),
	});

	const onSubmit = (data: FormTypes) => {
		setFormData(data);
	};

	setResetFunc(() => reset);

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.Fieldset>
				<S.InputContainer>
					<S.Label htmlFor="title">{t("CreateFilmForm.filmTitle")}</S.Label>
					<S.Input
						{...register("title")}
						placeholder={t("CreateFilmForm.filmTitle")}
					/>
					<InputError text={errors.title?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="description">
						{t("CreateFilmForm.description")}
					</S.Label>
					<S.Input
						{...register("description")}
						placeholder={t("CreateFilmForm.description")}
					/>
					<InputError text={errors.description?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="year">{t("CreateFilmForm.year")}</S.Label>
					<S.Input
						type="number"
						{...register("year")}
						placeholder={t("CreateFilmForm.year")}
					/>
					<InputError text={errors.year?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="image">{t("CreateFilmForm.picture")}</S.Label>
					<S.Input
						type="file"
						{...register("image")}
						accept="image/jpeg, image.png, image/jpg"
					/>
					<InputError text={errors.image?.message} />
				</S.InputContainer>
				<S.SaveButton type="submit" text={t("CreateFilmForm.save")} />
			</S.Fieldset>
		</S.Form>
	);
}

export default CreateFilmForm;
