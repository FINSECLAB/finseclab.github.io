import React from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext';

const originalMatchMedia = window.matchMedia;

const mockSystemTheme = (dark, legacy = false) => {
  const listeners = new Set();
  const mediaQuery = {
    matches: dark,
    [legacy ? 'addListener' : 'addEventListener']: jest.fn((...args) => {
      listeners.add(args[args.length - 1]);
    }),
    [legacy ? 'removeListener' : 'removeEventListener']: jest.fn((...args) => {
      listeners.delete(args[args.length - 1]);
    }),
  };
  window.matchMedia = jest.fn(() => mediaQuery);
  return {
    mediaQuery,
    change: (matches) => act(() => {
      mediaQuery.matches = matches;
      listeners.forEach(listener => listener({ matches }));
    }),
    listenerCount: () => listeners.size,
  };
};

const ThemeConsumer = () => {
  const { theme, setTheme } = useLanguage();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme}
    </button>
  );
};

const renderTheme = () => render(
  <MemoryRouter
    initialEntries={['/ko/']}
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <LanguageProvider><ThemeConsumer /></LanguageProvider>
  </MemoryRouter>
);

const expectTheme = (theme) => {
  expect(screen.getByRole('button').textContent).toBe(theme);
  expect(document.documentElement.getAttribute('data-theme')).toBe(theme);
  expect(document.documentElement.style.colorScheme).toBe(theme);
};

afterEach(() => {
  cleanup();
  window.matchMedia = originalMatchMedia;
  localStorage.clear();
  jest.restoreAllMocks();
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.style.colorScheme = '';
});

test.each([
  [false, 'light', 'dark'],
  [true, 'dark', 'light'],
])('starts with system dark=%s and ignores the previously saved theme', (dark, theme, savedTheme) => {
  mockSystemTheme(dark);
  localStorage.setItem('theme', savedTheme);
  const saveTheme = jest.spyOn(Storage.prototype, 'setItem');

  renderTheme();

  expectTheme(theme);
  expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
  expect(saveTheme).not.toHaveBeenCalled();
});

test.each([false, true])('follows system changes and removes its listener (legacy API: %s)', (legacy) => {
  const system = mockSystemTheme(false, legacy);
  const { unmount } = renderTheme();

  system.change(true);
  expectTheme('dark');
  system.change(false);
  expectTheme('light');
  expect(system.listenerCount()).toBe(1);

  unmount();
  expect(system.listenerCount()).toBe(0);
});

test('manual toggles last for the current visit and subsequent system changes resume syncing', () => {
  const system = mockSystemTheme(false);
  const saveTheme = jest.spyOn(Storage.prototype, 'setItem');
  const { unmount } = renderTheme();

  fireEvent.click(screen.getByRole('button'));
  expectTheme('dark');
  expect(saveTheme).not.toHaveBeenCalled();

  unmount();
  renderTheme();
  expectTheme('light');

  system.change(true);
  expectTheme('dark');
  fireEvent.click(screen.getByRole('button'));
  expectTheme('light');
  system.change(false);
  system.change(true);
  expectTheme('dark');
});

test('defaults to light when system color preferences are unavailable', () => {
  window.matchMedia = undefined;
  renderTheme();
  expectTheme('light');
});
