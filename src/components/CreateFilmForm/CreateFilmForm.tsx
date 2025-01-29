import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./CreateFilmForm.styled";
import { FormTypes } from "../../helpers/types";
import { Button, InputError } from "../../components";
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
					<S.Label htmlFor="title">{t("filmTitle")}</S.Label>
					<S.Input {...register("title")} placeholder={t("filmTitle")} />
					<InputError text={errors.title?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="description">{t("description")}</S.Label>
					<S.Input
						{...register("description")}
						placeholder={t("description")}
					/>
					<InputError text={errors.description?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="year">{t("year")}</S.Label>
					<S.Input
						type="number"
						{...register("year")}
						placeholder={t("year")}
					/>
					<InputError text={errors.year?.message} />
				</S.InputContainer>
				<S.InputContainer>
					<S.Label htmlFor="image">{t("picture")}</S.Label>
					<S.Input
						type="file"
						{...register("image")}
						accept="image/jpeg, image.png, image/jpg"
					/>
					<InputError text={errors.image?.message} />
				</S.InputContainer>
				<Button type="submit" width="100%" text={t("save")} />
			</S.Fieldset>
		</S.Form>
	);
}

export default CreateFilmForm;
