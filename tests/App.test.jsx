import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/components/App/App";
import { MemoryRouter } from "react-router-dom";

describe("App Component - quantityInCart", () => {
  it("shows cart quantity as 0 immediately after products are fetched", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, title: "Product 1" },
            { id: 2, title: "Product 2" },
          ]),
      })
    );

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerQuantity = await screen.findByText("0");
    expect(headerQuantity).toBeInTheDocument();

    globalThis.fetch.mockRestore();
  });
});


