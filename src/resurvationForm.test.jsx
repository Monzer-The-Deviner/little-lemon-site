// ReservationForm.test.js
import { render, screen } from '@testing-library/react';
import ReservationForm from '../path-to-your-component';
import { test,expect } from 'vitest';
test('HTML5 validation is applied', () => {
  render(<ReservationForm />);

  const dateInput = screen.getByLabelText(/choose a date/i);
  expect(dateInput).toBeRequired();

  const numberInput = screen.getByLabelText(/choose a number of diners/i);
  expect(numberInput).toHaveAttribute('type', 'number');
});
