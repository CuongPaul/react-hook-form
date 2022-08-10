import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(`This is a required field`)
    .email(`Please enter a valid email address (Ex: johndoe@domain.com)`),
  password: yup
    .string()
    .required(`This is a required field`)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])\S{8,}$/,
      `The password must be at least 8 characters without spaces and consist of digits, lowercase, UPPERCASE and special characters`
    ),
  gender: yup.string().required(`This is a required field`),
  familyStatus: yup.string().typeError(`This is a required field`),
  hobbies: yup
    .array()
    .of(yup.string())
    .max(3, 'Choose up to 3 options')
    .min(2, 'Choose at least 2 options')
    .typeError(`This is a required field`),
  questions: yup.array().of(
    yup.object().shape({
      content: yup.string().required('This is a required field'),
      answers: yup
        .array()
        .min(1, 'At least one question is required')
        .of(yup.string().required('This is a required field')),
    })
  ),
});
