import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header/Header.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("renders correctly with a provided amount", () => {
    const initialAmount = 6;

    render(
      <MemoryRouter>
        <Header quantity={initialAmount} />
      </MemoryRouter>
    );

    const cartQuantity = screen.getByText("6");
    expect(cartQuantity).toBeInTheDocument();
  });
  it("renders header", () => {
    const initialAmount = 0;

    const { container } = render(
      <MemoryRouter>
        <Header quantity={initialAmount} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
