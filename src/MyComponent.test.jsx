import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';
import '@testing-library/jest-dom';

test('displays the correct text', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});