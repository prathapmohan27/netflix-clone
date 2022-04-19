import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';

describe('SingIn Test', () => {
  it('check is error meg show correctly', async () => {
    render(
      <Router>
        <SignIn />
      </Router>
    );
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
    const email = screen.getByTestId('email');
    const button = screen.getByTestId('sign-in');
    const events = () => {
      fireEvent.change(email, { target: { value: 'prathapskt@gmail.com' } });
      fireEvent.click(button);
    };
    await act(async () => {
      events();
    });
    expect(email).toHaveValue('prathapskt@gmail.com');
    expect(
      screen.getByText(/Enter valid email and Password/i)
    ).toBeInTheDocument();
  });
});

describe('SignUp Test', () => {
  it('check is email error', async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    expect(screen.getAllByText(/sign up/i)).toHaveLength(2);
    // const email = screen.getByTestId('email');
    const button = screen.getByTestId('sign-up');
    const events = () => {
      fireEvent.click(button);
    };
    await act(async () => {
      events();
    });
    expect(
      screen.getByText(/Enter valid email and Password/i)
    ).toBeInTheDocument();
  });

  it('check password length error', async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    expect(screen.getAllByText(/sign up/i)).toHaveLength(2);
    const email = screen.getByTestId('email');
    const password = screen.getByTestId('password');
    const confirmPassword = screen.getByTestId('confirmPassword');
    const button = screen.getByTestId('sign-up');
    const events = () => {
      fireEvent.change(email, { target: { value: 'prathapskt@gmail.com' } });
      fireEvent.change(password, { target: { value: '123' } });
      fireEvent.change(confirmPassword, { target: { value: '123' } });
      fireEvent.click(button);
    };
    await act(async () => {
      events();
    });
    expect(
      screen.getByText(/Password should be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  it('check password not match error work', async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
    expect(screen.getAllByText(/sign up/i)).toHaveLength(2);
    const email = screen.getByTestId('email');
    const password = screen.getByTestId('password');
    const confirmPassword = screen.getByTestId('confirmPassword');
    const button = screen.getByTestId('sign-up');
    const events = () => {
      fireEvent.change(email, { target: { value: 'prathapskt@gmail.com' } });
      fireEvent.change(password, { target: { value: 'prathap27' } });
      fireEvent.change(confirmPassword, { target: { value: 'prathapskt' } });
      fireEvent.click(button);
    };
    await act(async () => {
      events();
    });
    expect(screen.getAllByText(/Password not Match/i)).toHaveLength(2);
  });
});
