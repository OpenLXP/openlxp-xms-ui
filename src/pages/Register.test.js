import { act, fireEvent, render, screen } from '@testing-library/react';
import Register from './Register';
import mockAxios from 'jest-mock-axios';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

const renderer = () => {
  return render(
    <Register />
  );
};

describe('Register Page', () => {

    it('should render a form', () => {
        renderer();
  
        expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(
          screen.getByPlaceholderText('Confirm Password')
        ).toBeInTheDocument();
  
        expect(
          screen.getByRole('button', { name: /Create Account/i })
        ).toBeInTheDocument();
    });
});

describe('Register Page', () => {
  describe('Actions', () => {
    beforeEach(() => {
        renderer();
    });

    it('should change values on input: Email', () => {
      const input = screen.getByPlaceholderText('Email');

      act(() => {
        fireEvent.change(input, { target: { value: 'email' } });
      });

      expect(input.value).toBe('email');
    });

    it('should change values on input: Password', () => {
      const input = screen.getByPlaceholderText('Password');
      act(() => {
        fireEvent.change(input, { target: { value: 'password' } });
      });

      expect(input.value).toBe('password');
    });

    it('should register a user', () => {
      mockAxios.post.mockImplementation(() =>
        Promise.resolve({ data: { user: {} } })
      );

      act(() => {
        const fname = screen.getByPlaceholderText('First Name');
        const lname = screen.getByPlaceholderText('Last Name');
        const email = screen.getByPlaceholderText('Email');
        const password = screen.getByPlaceholderText('Password');
        const confirmPassword = screen.getByPlaceholderText('Confirm Password');

        fireEvent.change(fname, { target: { value: 'Test' } });
        fireEvent.change(lname, { target: { value: 'Test' } });
        fireEvent.change(email, { target: { value: 'email@test.com' } });
        fireEvent.change(password, { target: { value: 'password' } });
        fireEvent.change(confirmPassword, { target: { value: 'password' } });

        const button = screen.getByText(/Create Account/i);
        fireEvent.click(button);
      });
    });

    // it('should navigate user to login page ', () => {
    //     renderer();
    //     act(() => {  
    //         const button = screen.getByText(/Sign in to your account/i);
    //         fireEvent.click(button);
    //     });
    // });
  });
});
