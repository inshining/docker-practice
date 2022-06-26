import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText("안녕하세요!");
  expect(linkElement).toBeInTheDocument();
});
