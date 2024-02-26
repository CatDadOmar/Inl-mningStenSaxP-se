// Game.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Game from './Game';

describe("Testing Header", () => {
test('renders correctly', () => {
  const { getByText } = render(<Game />);
  const titleElement = getByText('Sten Sax Påse');
  expect(titleElement).toBeTruthy();
});
});