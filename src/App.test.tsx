import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders react logo', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/logo/i);
  expect(imgElement).toBeInTheDocument();
})

test('renders prompt to user', () => {
  render(<App />);
  const pElement = screen.getByText((_content, node) => /^edit src\/app\.tsx and save to reload.$/i.test(node.textContent));
  expect(pElement).toBeInTheDocument();
})