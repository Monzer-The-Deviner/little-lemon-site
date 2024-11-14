/* eslint-disable no-undef */
// initializeTimes.test.js
import { renderHook } from '@testing-library/react-hooks';
import { initializeTimes } from '../path-to-your-functions';

jest.mock('../path-to-your-functions', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00']),
}));

test('initializeTimes returns a non-empty array', async () => {
  const { result } = renderHook(() => initializeTimes());
  expect(result.current.length).toBeGreaterThan(0);
});
