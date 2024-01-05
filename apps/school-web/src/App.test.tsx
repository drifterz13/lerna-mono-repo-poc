import "@testing-library/jest-dom";

import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("loads and displays greeting", async () => {
  // ARRANGE
  render(<App />);

  expect(screen.queryByTestId("count-btn")!).toHaveTextContent("count is 0");

  // ACT
  await userEvent.click(screen.getByTestId("count-btn"));

  // ASSERT
  expect(screen.queryByTestId("count-btn")!).toHaveTextContent("count is 1");
});
