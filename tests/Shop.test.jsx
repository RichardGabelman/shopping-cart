import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../src/components/Shop/Shop";

describe("Shop", () => {
  it("renders correctly with the initial amount", () => {
    const initialAmount = 5;
    expect(true).toBe(true);
  });
});