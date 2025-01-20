import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomInput from "../src/components/Product/CustomInput/CustomInput";

describe("CustomInput", () => {
  it("renders correctly with the initial amount", () => {
    const setAmount = vi.fn();
    const initialAmount = 5;

    render(<CustomInput amount={initialAmount} setAmount={setAmount} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(initialAmount);
  });

  it("clicking buttons calls setAmount", async () => {
    const user = userEvent.setup();

    const setAmount = vi.fn();
    const initialAmount = 5;

    render(<CustomInput amount={initialAmount} setAmount={setAmount} />);

    const minusBtn = screen.getByText('-');
    const plusBtn = screen.getByText('+');

    await user.click(minusBtn);
    await user.click(plusBtn);

    expect(setAmount).toHaveBeenCalledTimes(2);
  })
})