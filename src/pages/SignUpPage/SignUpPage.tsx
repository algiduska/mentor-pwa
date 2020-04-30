import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import Container from '../../components/Container/Container';
import { History } from 'history';
import '../../assets/styles/forms.scss';
import Button, { ButtonTypeEnum } from '../../components/Button/Button';
import signUp from '../../validations/signUp';

interface ISignUpPageProps {
  //for whatever reason this needs to be here instead of directly in signUpPage props - otherwise it says history.push is not a function
  history: History;
}

interface ISignUpFormValues {
  email: string;
  password: string;
}

export const submitSignUp = (history: History) => (
  formValues: ISignUpFormValues,
  { setStatus, setSubmitting }: FormikHelpers<ISignUpFormValues>
) => {
  console.log(JSON.stringify(formValues, null, 2));
  setSubmitting(false);
  history.push('/');
};

const SignUpPage = ({ history }: ISignUpPageProps) => {
  return (
    <Container>
      <h1>Sign up form</h1>
      <Formik<ISignUpFormValues>
        initialValues={{ email: '', password: '' }}
        validationSchema={signUp}
        onSubmit={submitSignUp(history)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* extract this label? */}
            <label>
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className={'error'}>{errors.email}</p>
              )}
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <p className={'error'}>{errors.password}</p>
              )}
            </label>
            <Button
              type={ButtonTypeEnum.Submit}
              disabled={!isValid || isSubmitting}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpPage;
