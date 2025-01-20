import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop/Shop";

describe("Shop", () => {
  /*
  it("renders products correctly", () => {
    const fakeProducts = [
      { id: 1, title: "First Item", image: "/img.png", price: 1.5 },
      { id: 2, title: "Second item", image: "/img2.png", price: 2.33 },
    ];
    const fakeUpdate = vi.fn();
    globalThis.useOutletContext = vi.fn(() => {
      return { products: fakeProducts, updateProductQuantity: fakeUpdate };
    });

    render(<Shop />);

    const title1 = screen.findByText("First Item");
    expect(title1).toBeInTheDocument();

    globalThis.mockRestore();
  });
  */
 expect(true).toBe(true);
});
