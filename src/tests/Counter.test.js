// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plusButton = screen.getByRole('button',{name: /\+/i});
  fireEvent.click(plusButton);
  const count = screen.getByText(/1/i);
  expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minusButton = screen.getByRole('button', {name: /-/i});
  fireEvent.click(minusButton);
  const count = screen.getByText(/-1/i);
  expect(count).toBeInTheDocument();
});
