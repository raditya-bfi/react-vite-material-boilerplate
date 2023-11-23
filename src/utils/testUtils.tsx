/* eslint-disable @typescript-eslint/no-empty-function */
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '~/context/auth/AuthProvider';

const jestMocks = jest.fn();

const intersectionObserver = () => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();
  const mockIntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect,
    prototype: IntersectionObserver.prototype,
    root: null,
    rootMargin: '',
    thresholds: [],
    takeRecords: jest.fn(),
  }));
  window['IntersectionObserver'] = mockIntersectionObserver;
};

jestMocks();
beforeEach(() => {
  intersectionObserver();
});

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, intersectionObserver, jestMocks };
