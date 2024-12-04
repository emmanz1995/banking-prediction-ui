// import React from 'react';
// import { create } from 'react-test-renderer';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

describe('<LoginForm />', () => {
  it('should render', () => {
    render(<LoginForm />);
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('should login user', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');

    fireEvent.change(emailInput, {
      target: { value: 'eokuchukwu95@gmail.com' },
    });
    fireEvent.change(passwordInput, { target: { value: 'PAssword@123?' } });
    fireEvent.click(loginButton);

    await act(async () => {
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });
});
