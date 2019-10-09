import * as Yup from 'yup';

export const signIn = Yup.object().shape({
	email: Yup.string()
		.email()
		.required('Please provide email address.'),
	password: Yup.string().required('Please provide password.'),
});