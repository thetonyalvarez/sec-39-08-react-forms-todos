import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import TodoList from './TodoList'

afterEach(cleanup)

// smoke test
it("renders without crashing", function() {
  render(<TodoList />)
});

// snapshot
it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("shows empty TodoList (aka no Todo item) on start", function() {
  const { getByTestId } = render(<TodoList />);
  expect(getByTestId('TodoList')).not.toContainHTML("class='Todo'")
});