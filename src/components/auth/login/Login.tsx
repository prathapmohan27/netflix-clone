import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Path } from '../../navBar/NavBarStyle';
import { loginNetflix } from '../../helperFunction/firebase';
import {
  Form,
  FormContainer,
  SignButton,
  InputContainer,
  TextContainer,
  Label,
  Meg,
} from '../AuthStyle';

interface LoginInterface {
  email: string;
  password: string;
}

const Login = () => {
  const [errorMeg, setErrorMeg] = useState<boolean>(false);
  const [data, setData] = useState<LoginInterface>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name as keyof LoginInterface]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      data.email === '' ||
      !data.email.match(/^\S+@\S+\.\S+$/) ||
      data.password === ''
    ) {
      setErrorMeg(true);
      return;
    } else {
      const login = await loginNetflix(data.email, data.password);
      if (login) {
        navigate('/home');
      } else {
        setErrorMeg(true);
      }
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {errorMeg ? <Meg>Enter valid email and Password</Meg> : null}
      <Form>
        <InputContainer>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
          />
          <Label str={data.email} htmlFor="email">
            Email
          </Label>
        </InputContainer>
        <InputContainer>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
          />
          <Label str={data.password} htmlFor="password">
            Password
          </Label>
        </InputContainer>

        <SignButton onClick={handleSubmit}>Sign In</SignButton>
      </Form>
      <TextContainer>
        <p>New to Netflix?</p>
        <Path to="/sign-up-page">
          <u>Sign up now.</u>
        </Path>
      </TextContainer>
    </FormContainer>
  );
};

export default Login;
