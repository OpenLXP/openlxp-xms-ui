import { act, fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
import mockAxios from 'jest-mock-axios';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter, Route } from "react-router-dom";


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

    const button = screen.getByText(/Login/i);
    // act(() => {
    //   fireEvent.click(button);
    // });
    mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: { user: {} } })
    );
    // expect(mockAxios.post).toHaveBeenCalled();
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
      const input = screen.getByPlaceholderText('Password');
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
    //   expect(mockAxios.post).toHaveBeenCalled();
    });
  });

  describe('Login Page', () => {
    it('should click register button', () => {

      let testHistory, testLocation;
      act(() => {
        render(
          <MemoryRouter initialEntries={["/login"]}>
            <Login />
            <Route
              path="/register"
              render={({ history, location }) => {
                testHistory = history;
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
  });
});
