import { LoginContainer, LoginSection } from './style';
import LoginForm from '../../components/organisms/loginForm/LoginForm';

function Login() {
  return (
    <LoginContainer>
      <LoginSection>
        <LoginForm />
      </LoginSection>
    </LoginContainer>
  );
}

export default Login;
