import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "../src/components/Home/Home";

describe("Home", () => {
  it("renders correctly (snapshot)", () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot();
  });
});