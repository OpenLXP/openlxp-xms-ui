import { act, fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
import mockAxios from 'jest-mock-axios';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter, Route } from "react-router-dom";
import { useAuth } from "../context/authContext";

// mocking the useAuth hook
jest.mock('../context/authContext', () => ({
  useAuth: jest.fn(),
}));

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    useAuth.mockImplementation(() => ({
      user: false, login: () => {}
    }));
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

const renderer = () => {
  return render(
    <Login />
  );
};

describe('Login Page', () => {

  it('should show invalid credentials message.', () => {

    const screen = renderer();

    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText('Password');
    act(() => {
      fireEvent.change(email, { target: { value: 'email@test.com' } });
      fireEvent.change(password, { target: { value: 'password' } });
    });

    mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: { user: {} } })
    );
  });
});

describe('Login Page', () => {
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

    it('should change show error message for empty attributes', () => {
      const input_p = screen.getByPlaceholderText('Password');
      const input_e = screen.getByPlaceholderText('Email');
      act(() => {
        fireEvent.change(input_e, { target: { value: '' } });
        fireEvent.change(input_p, { target: { value: '' } });

        const button = screen.getByText(/Login/i);
        fireEvent.click(button);
      });

      expect(screen.getByText(/All fields required/i)).toBeInTheDocument();
    });

    it('should change show error message for empty password', () => {
      const input = screen.getByPlaceholderText('Password');
      act(() => {
        fireEvent.change(input, { target: { value: '' } });

        const button = screen.getByText(/Login/i);
        fireEvent.click(button);
      });

      expect(screen.getByText(/All fields required/i)).toBeInTheDocument();
    });

    it('should change show error message for empty email', () => {
      const input = screen.getByPlaceholderText('Email');
      act(() => {
        fireEvent.change(input, { target: { value: '' } });

        const button = screen.getByText(/Login/i);
        fireEvent.click(button);
      });

      expect(screen.getByText(/All fields required/i)).toBeInTheDocument();
    });

    it('should log a user in.', () => {
      mockAxios.post.mockImplementation(() =>
        Promise.resolve({ data: { user: {} } })
      );

      act(() => {
        const email = screen.getByPlaceholderText('Email');
        const password = screen.getByPlaceholderText('Password');

        fireEvent.change(email, { target: { value: 'email@test.com' } });
        fireEvent.change(password, { target: { value: 'password' } });

        const button = screen.getByText(/Login/i);

        fireEvent.click(button);
      });
    });
  });

  describe('Login Page', () => {
    it('should click register button', () => {

      let testLocation;
      act(() => {
        render(
          <MemoryRouter initialEntries={["/login"]}>
            <Login />
            <Route
              path="/register"
              render={({ location }) => {
                testLocation = location;
              }}
            />
          </MemoryRouter>
        );
        const button = screen.getByText(/Create an Account/i);
        fireEvent(button, new MouseEvent("click", { bubbles: true }));
      });
      expect(testLocation.pathname).toBe("/register");

    });
    it('if user, navigate to dashboard', () => {
      useAuth.mockImplementation(() => ({
        user: true, register: () => {}
      }));
      act(() => {
        render(
          <MemoryRouter initialEntries={["/login"]}>
            <Login />
            <Route
              path="/dashboard"
              render={() => { }}
            />
          </MemoryRouter>,
          container
        );
        
      });
    });
  });
});
