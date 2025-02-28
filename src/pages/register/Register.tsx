import React from 'react';
import { RegisterContainer, RegisterSection } from './styles';
import RegisterForm from '../../components/organisms/registerForm/RegisterForm';

function Register() {
  return (
    <RegisterContainer>
      <RegisterSection>
        <RegisterForm />
      </RegisterSection>
    </RegisterContainer>
  );
}

export default Register;
