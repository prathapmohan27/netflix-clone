import React, { useState } from 'react';
import { Path } from '../../navBar/NavBarStyle';
import {
  Form,
  FormContainer,
  SignButton,
  InputContainer,
  TextContainer,
  Label,
} from '../AuthStyle';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form action="">
        <InputContainer>
          <input
            onChange={handleEmailChange}
            type="email"
            id="email"
            required
            autoComplete="off"
          />
          <Label str={email} htmlFor="email">
            Email
          </Label>
        </InputContainer>
        <InputContainer>
          <input
            onChange={handlePawChange}
            type="password"
            id="password"
            required
            autoComplete="off"
          />
          <Label str={password} htmlFor="password">
            Password
          </Label>
        </InputContainer>

        <SignButton>Sign In</SignButton>
      </Form>
      <TextContainer>
        <p>New to Netflix?</p>
        <Path to="/">
          <u>Sign up now.</u>
        </Path>
      </TextContainer>
    </FormContainer>
  );
};

export default Login;
