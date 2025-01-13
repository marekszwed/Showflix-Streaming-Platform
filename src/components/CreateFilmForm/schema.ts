import * as yup from "yup";

export const userSchema = yup.object({
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
