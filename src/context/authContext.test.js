import { AuthContext, AuthProvider, useAuth } from './authContext';
import { render } from '@testing-library/react';

jest.unmock('./authContext');

// mock axios
jest.mock('axios');

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
});
