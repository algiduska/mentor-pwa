import * as yup from 'yup';

const signUp = yup.object().shape({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters long'),
});

export default signUp;
