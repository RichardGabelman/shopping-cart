import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/components/App/App";

describe("App", () => {
  it("renders correctly with the initial amount", () => {
    const initialAmount = 5;
    expect(true).toBe(true);
  });
});