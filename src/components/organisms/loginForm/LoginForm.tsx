// import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, Navigate } from 'react-router-dom';
import { auth, getAccessToken } from '../../../connector/auth/auth';
// import Spinner from '../loading.../Spinner';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is Required!')
    .email('Has to be a valid email address!'),
  password: yup.string().required('Password is Required!').min(6).max(20),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      const loginData = {
        email: values.email,
        password: values.password,
      };
      const { email, password } = loginData;

      try {
        const response = await auth(email, password);
        console.log('logged In', response);
        navigate('/dashboard');
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: validationSchema,
  });

  if (getAccessToken()) {
    return <Navigate to={{ pathname: '/dashboard' }} />;
  }
  return (
    <Form onSubmit={formik.handleSubmit} data-testid="login-form">
      <div className="login-header">
        <h4>Welcome to NarrowRoad.NET</h4>
        <p className="text">Login to app now!</p>
      </div>
      <div style={{ margin: '15px 0' }}>
        <label htmlFor="email">Email:</label>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <ErrorMessage>
          {formik.errors.email && formik.touched.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </ErrorMessage>
      </div>
      <div style={{ margin: '15px 0' }}>
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <ErrorMessage>
          {formik.errors.password && formik.touched.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </ErrorMessage>
      </div>
      {/*<Button type="submit" disabled={loading}>{ loading ? <Spinner /> : 'Log In' }</Button>*/}
      <Button type="submit">Log In</Button>
      <p className="text-link">
        Don't have an Account? <a href="/register">Join Now</a>
      </p>
    </Form>
  );
};

const Form = styled.form`
  width: 350px;
  background-color: rgb(17 24 39 / 1);
  padding: 40px;
  color: #f4f7fe;
  border-radius: 8px;
  .text {
    font-size: 12px;
  }
  .text-link {
    font-size: 12px;
    margin: 15px;
    text-align: center;
    a {
      color: #f4f7fe;
      text-decoration: none;
      font-weight: 800;
    }
  }
  .login-header {
    text-align: center;
  }
  label {
    font-size: 12px;
  }
`;

const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  background-color: #f4f7fe;
  color: rgb(31 41 55 / 1);
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  background-color: rgb(106 85 250 / 1);
  color: #fff;
  font-weight: 800;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: rgb(248 113 113 / 1);
  font-size: 12px;
`;

export default LoginForm;
