import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { expect, it, describe } from 'vitest'
import NewTodoForm from './NewTodoForm'

afterEach(cleanup)

// smoke test
it("renders without crashing", function() {
  render(<NewTodoForm />)
});

// snapshot
it("matches snapshot", function() {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
