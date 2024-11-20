// import necessary react testing library helpers here
import { render, screen, fireEvent} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter'

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const heading = screen.getByText(/counter/i);
  expect(heading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  //Checks if the intial count is 0
  const Count_Value = screen.getByTestId('count');
  expect(Count_Value).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  //Will find the plus button and presses
  const Increment_Button = screen.getByText('+');
  fireEvent.click(Increment_Button);
  //Checks if the new count is 1
  const Count_Value1 = screen.getByTestId('count');
  expect(Count_Value1).toHaveTextContent('1');
  fireEvent.click(Increment_Button);
  //Checks if the new count is 1
  const Count_Value2 = screen.getByTestId('count');
  expect(Count_Value2).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  //Will find the plus button and presses
  const Decrement_Button = screen.getByText('-');
  fireEvent.click(Decrement_Button);
  //Checks if the new count is 1
  const Count_Value3 = screen.getByTestId('count');
  expect(Count_Value3).toHaveTextContent('-1');
  fireEvent.click(Decrement_Button);
  //Checks if the new count is 1
  const Count_Value4 = screen.getByTestId('count');
  expect(Count_Value4).toHaveTextContent('-2');
});
