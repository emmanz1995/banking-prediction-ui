import type { FC } from 'react';
import InputField from '../../atom/input';
import { LoginContainer } from './styles';
import Button from '../../atom/button';

const Form: FC = (props: object) => {
  return (
    <LoginContainer>
      <h5 className="title">Login For Access</h5>
      <InputField type="text" name="email" placeholder="Your Email" />
      <InputField type="password" name="password" placeholder="Your Password" />
      <Button size="small" label="Sign In" />
      <hr className="line-separator" />
      <Button size="small" label="Join Now" />
    </LoginContainer>
  );
};

export default Form;
