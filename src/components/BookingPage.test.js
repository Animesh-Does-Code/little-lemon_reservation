import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./pages/BookingPage.js";
import { initializeTimes, UpdateTimes } from "./Main.js"

const AvailableTimes = jest.fn();
const changeDate = jest.fn()
const changeGuests = jest.fn()

Object.defineProperty(window, 'fetchAPI', {
  writable: true,
  value: jest.fn().mockImplementation(),
});

test('Test for static text in BookingForm', () => {
  render(<BrowserRouter><BookingPage AvailableTimes={AvailableTimes}></BookingPage></BrowserRouter>);
  const text = "Choose date";
  expect(screen.getByText(text)).toBeInTheDocument();
})

test('Test initializeTimes function', () => {
  const mockTime = window.fetchAPI(new Date());
  expect(initializeTimes()).toEqual(mockTime);
})

test('Test UpdateTimes function', () => {
  const action = "05-02-2024";
  const mockState = window.fetchAPI(new Date(action));
  expect(UpdateTimes(action)).toEqual(mockState);
})

test('Test form validation with invalid values', () => {
  render(<BrowserRouter><BookingPage changeDate={changeDate} changeGuests={changeGuests} AvailableTimes={AvailableTimes}></BookingPage></BrowserRouter>);
  const dateInput = screen.getByLabelText("Choose date");
  const guestInput = screen.getByLabelText("Number of guests")
  userEvent.type(dateInput, '2023-10-10');
  userEvent.type(guestInput, '0');
  const dateErrorMessage = 'Date cannot be before today.';
  const guestErrorMessage = 'Number of guests has to be 1 or more.';
  expect(screen.getByText(dateErrorMessage)).toBeInTheDocument();
  expect(screen.getByText(guestErrorMessage)).toBeInTheDocument();
  expect(screen.getByRole("submit").getAttribute('disabled')).toBe("")
})

test('Test form validation with valid values', () => {
  render(<BrowserRouter><BookingPage changeDate={changeDate} changeGuests={changeGuests} AvailableTimes={AvailableTimes}></BookingPage></BrowserRouter>);
  const dateInput = screen.getByLabelText("Choose date");
  const guestInput = screen.getByLabelText("Number of guests");
  const todayDate = new Date();
  const todayString = todayDate.toISOString().split('T')[0];
  userEvent.type(dateInput, todayString);
  userEvent.type(guestInput, '5');
  const dateErrorMessage = 'Date cannot be before today.';
  const guestErrorMessage = 'Number of guests has to be 1 or more.';
  expect(() => screen.getByText(dateErrorMessage)).toThrow();
  expect(() => screen.getByText(guestErrorMessage)).toThrow();
  expect(screen.getByRole("submit").getAttribute('disabled')).toBe(null)
})