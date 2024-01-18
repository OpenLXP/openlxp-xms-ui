'use strict';

// mock useRouter
jest.mock('next/dist/client/router', () => require('next-router-mock'));

// mocking useStorage
jest.mock('@/hooks/useStorage', () => ({
  useStorage: jest.fn(),
}));


// mocking the useAuth hook
jest.mock('@/context/authContext', () => ({
  useAuth: jest.fn(),
}));


// mocking the interaction observer
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;
