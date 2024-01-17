import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load the submit test inside button in contact component", () => {
  render(<Contact />);

  const heading = screen.getByText("Submit");

  expect(heading).toBeInTheDocument();
});
