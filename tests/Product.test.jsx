import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../src/components/Product/Product";

describe("Product", () => {
  it("clicking add to cart calls updateProductQuantity", async () => {
    const user = userEvent.setup();

    const product = { id: 1, title: "First Item", image: "/img.png", price: 1.50};
    const updateProductQuantity = vi.fn();

    render(<Product product={product} updateProductQuantity={updateProductQuantity}/>);

    const addToCartBtn = screen.getByText("Add to Cart");

    await user.click(addToCartBtn);

    expect(updateProductQuantity).toHaveBeenCalledWith(1, 0);
  });
  it("clicking add to cart calls updateProductQuantity with correct amount", async () => {
    const user = userEvent.setup();

    const product = { id: 1, title: "First Item", image: "/img.png", price: 1.50};
    const updateProductQuantity = vi.fn();

    render(<Product product={product} updateProductQuantity={updateProductQuantity}/>);

    const plusBtn = screen.getByText("+");
    const addToCartBtn = screen.getByText("Add to Cart");
    const amountInput = screen.getByRole("spinbutton");

    expect(amountInput).toHaveValue(0);

    await user.click(plusBtn);

    expect(amountInput).toHaveValue(1);

    await user.click(addToCartBtn);

    expect(updateProductQuantity).toHaveBeenCalledWith(1, 1);

    expect(amountInput).toHaveValue(0);
  });
})