import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import connector from '../../../connector/connector';
import InputField from '../../atom/input';
import Button from '../../atom/button';

const validationSchema = yup.object().shape({
  // name: yup.string().required("Name is Required!"),
  username: yup.string().required('Username is Required!').min(4).max(20),
  email: yup.string().required('Email is Required!').email(),
  // dob: yup.date().required("Birthday is Required!"),
  password: yup.string().required('Password is Required!').min(6).max(20),
  confirmPassword: yup
    .string()
    .required('Password is Required!')
    .oneOf([yup.ref('password'), null], "Passwords don't match!"),
});

// const handleRegister = async (values, navigate) => {
//   connector('http://localhost:3001/api/user', {
//     method: 'POST',
//     data: {
//       username: values.username,
//       email: values.email,
//       password: values.password
//     }
//   }).then(resp => {
//     navigate('/')
//     console.log('response:', resp)
//   }).catch(err => console.log(err))
//   console.log(values)
// }

const RegisterForm = () => {
  // const [avatar, setAvatar] = useState(null)
  const navigate = useNavigate();
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: values => {
      connector('http://localhost:3001/api/user', {
        method: 'POST',
        data: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      })
        .then(resp => {
          navigate('/');
          console.log('response:', resp);
        })
        .catch(err => console.log(err));
      console.log(values);
    },
  });

  // const handleChangeImage = (evt: any) => {
  //   const File: any = new FileReader();
  //   File.readAsDataURL(evt.target.files[0]);
  //   console.log(File);
  //   File.onload = () => {
  //     if(File.readyState === 2)
  //       setAvatar(File.result as string | any);
  //   }
  // }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="register-header">
        <h4>Welcome to NarrowRoad.NET</h4>
        <p className="text">Join Now to unlock access!</p>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        {/*<div>*/}
        {/*  <label htmlFor="name">Name</label>*/}
        {/*  <Input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />*/}
        {/*  <ErrorMessage>{errors.name && touched.name ? <p>{errors.name}</p> : null}</ErrorMessage>*/}
        {/*</div>*/}

        <div>
          <label htmlFor="username">Username</label>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <ErrorMessage>
            {errors.username && touched.username ? (
              <p>{errors.username}</p>
            ) : null}
          </ErrorMessage>
        </div>
      </div>

      <div style={{ margin: '15px 0' }}>
        <label htmlFor="email">Email</label>
        <InputField
          type="text"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <ErrorMessage>
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </ErrorMessage>
      </div>

      {/*<div style={{ margin: "15px 0" }}>*/}
      {/*  <label htmlFor="dob">Birthday</label>*/}
      {/*  <Input type="date" name="dob" placeholder="Birthday" value={values.dob} onChange={handleChange} />*/}
      {/*  <ErrorMessage>{errors.dob && touched.dob ? <p>{errors.dob}</p> : null}</ErrorMessage>*/}
      {/*</div> */}

      {/*<div style={{ margin: "15px 0" }}>*/}
      {/*  <label htmlFor="avatar">Avatar</label>*/}
      {/*  /!* TODO: Explore why this is complaining... *!/*/}
      {/*  /!* @ts-ignore *!/*/}
      {/*  <Input type="file" accept="image/*" name="avatar" placeholder="Avatar" onChange={handleChangeImage} />*/}
      {/*</div>*/}

      <div style={{ margin: '15px 0' }}>
        <label htmlFor="password">Password</label>
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <ErrorMessage>
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
        </ErrorMessage>
      </div>

      <div style={{ margin: '15px 0' }}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <ErrorMessage>
          {errors.confirmPassword && touched.confirmPassword ? (
            <p>{errors.confirmPassword}</p>
          ) : null}
        </ErrorMessage>
      </div>
      <Button type="submit" size="small">
        Register
      </Button>
      <p className="text-link">
        Already have an Account? <a href="/">Login Now</a>
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
  .register-header {
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
`;

const ErrorMessage = styled.span`
  color: rgb(248 113 113 / 1);
  font-size: 12px;
`;

export default RegisterForm;
