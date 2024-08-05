/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// updateTimes.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import { updateTimes } from '../path-to-your-functions';
import { test,expect } from 'vitest';
jest.mock('../path-to-your-functions', () => ({
  fetchAPI: jest.fn((date) => ['17:00', '18:00']),
}));

test('updateTimes function returns times for a given date', async () => {
  const initialState = [];
  const selectedDate = new Date('2024-08-05');

  const { result } = renderHook(() => useReducer(updateTimes, initialState));

  act(() => {
    result.current[1]({ type: 'SET_TIMES', payload: selectedDate });
  });

  expect(result.current[0].length).toBeGreaterThan(0);
  expect(result.current[0]).toEqual(['17:00', '18:00']);
});
