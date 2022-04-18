import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { createAccount } from '../../helperFunction/firebase';
import { Path } from '../../navBar/NavBarStyle';
import {
  Form,
  FormContainer,
  SignButton,
  InputContainer,
  TextContainer,
  Label,
  Meg,
} from '../AuthStyle';

interface signUpInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [data, setData] = useState<signUpInterface>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [pawError, setPawError] = useState<boolean>(false);
  const [lengthError, setLengthError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...data,
      [name as keyof signUpInterface]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation()) {
      const signUp = await createAccount(data.email, data.password);
      if (signUp) {
        navigate('/home');
      } else {
        setEmailError(true);
        return;
      }
    }
  };

  const validation = () => {
    if (data.email === '' || !data.email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError(true);
      return true;
    } else if (data.password.length >= 6 || data.password === '') {
      if (data.confirmPassword !== data.password) {
        setPawError(true);
        setLengthError(false);
        setEmailError(false);
        return true;
      } else {
        setLengthError(true);
        setPawError(false);
        setEmailError(false);
      }
      return true;
    } else {
      return false;
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {emailError ? <Meg>Enter valid email and password</Meg> : null}
      {lengthError ? <Meg>Password should be at least 6 characters</Meg> : null}
      <Form action="">
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
            required
            autoComplete="off"
          />
          <Label str={data.password} htmlFor="password">
            Password
          </Label>
        </InputContainer>
        {pawError ? <Meg>Password not Match</Meg> : null}
        <InputContainer>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            autoComplete="off"
          />
          <Label str={data.confirmPassword} htmlFor="confirmPassword">
            Confirm Password
          </Label>
        </InputContainer>
        {pawError ? <Meg>Password not Match</Meg> : null}
        <SignButton onClick={handleSubmit}>Sign Up</SignButton>
      </Form>
      <TextContainer>
        <p>Already have an account?</p>
        <Path to="/sign-in-page">
          <u>Login.</u>
        </Path>
      </TextContainer>
    </FormContainer>
  );
};

export default SignUp;
