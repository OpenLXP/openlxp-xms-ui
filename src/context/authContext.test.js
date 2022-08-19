import { AuthContext, AuthProvider } from './authContext';
import { render } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';

jest.unmock('./authContext');

describe('Auth Context', () => {
  it('does render', () => {
    const { getByText } = render(
      <AuthProvider>
        <div>
          <p>Hello</p>
        </div>
      </AuthProvider>
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('user is null', () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            return <div>{JSON.stringify(context.user)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });

  it('error is null', () => {
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            return <div>{JSON.stringify(context.error)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });

  it('does login', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: { experiences: [{}] } }));
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            context.login('hi');
            return <div>{JSON.stringify(context.error)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });

  it('does register', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({}));
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            context.register('hi');
            return <div>{JSON.stringify(context.error)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });

  it('fail login', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error("login fail")));
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            context.login('hi');
            return <div>{JSON.stringify(context.user)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });

  it('fail register', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error("register fail")));
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            context.register('hi');
            return <div>{JSON.stringify(context.user)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });

  it('does logout', () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({}));
    const { getByText } = render(
      <AuthProvider>
        <AuthContext>
          {(context) => {
            expect(context).toBeTruthy();
            context.logout();
            return <div>{JSON.stringify(context.error)}</div>;
          }}
        </AuthContext>
      </AuthProvider>
    );
    expect(getByText('null')).toBeInTheDocument();
  });
});
