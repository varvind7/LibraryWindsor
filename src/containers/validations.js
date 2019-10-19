import * as Yup from "yup";

export const signIn = Yup.object().shape({
	email: Yup.string()
		.email()
		.required("Please provide email address."),
	password: Yup.string().required("Please provide password.")
});

export const registerValidation = Yup.object().shape({
	email: Yup.string()
		.email()
		.required("Please provide email address."),
	name: Yup.string().required("Please provide name."),
	password: Yup.string().required("Please provide password."),
	reference_id: Yup.string().required(),
	user_type: Yup.number().required(),
	last_day: Yup.date().required(),
	confirm_password: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Please confirm the password")
});
