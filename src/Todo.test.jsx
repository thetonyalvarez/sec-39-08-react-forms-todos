import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import Todo from './Todo'

afterEach(cleanup)

// smoke test
it("renders without crashing", function() {
  render(<Todo />)
});

// snapshot
it("matches snapshot", function() {
  const {asFragment} = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("shows a new Todo", function() {
  const { getByTestId } = render(<Todo task="task test"/>)
  const todo = getByTestId('todo-row')
  
  expect(todo).toContainHTML('task test')
})