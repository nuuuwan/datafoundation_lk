import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const titleElem = screen.getByText('Lanka Data Foundation');
  expect(titleElem).toBeInTheDocument();
});
