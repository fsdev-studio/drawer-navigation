import { render, screen } from '@testing-library/react';
import Drawer from './App';

test('renders learn react link', () => {
  render(<Drawer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
