import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';

test('renders 9 cells for the game board', () => {
  render(<Board />);
  const cells = screen.getAllByTestId('cell');
  expect(cells).toHaveLength(9);
});

test('allows a player to click a cell and mark it', () => {
  render(<Board />);
  const cells = screen.getAllByTestId('cell');
  fireEvent.click(cells[0]);
  expect(cells[0].textContent).toBe('X');
});

