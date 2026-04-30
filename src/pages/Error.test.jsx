import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useRouteError } from "react-router-dom";
import ErrorPage from "./Error";

vi.mock("react-router-dom", () => ({
  useRouteError: vi.fn(),
}));

describe("ErrorPage", () => {
  it("renders the route error status text", () => {
    useRouteError.mockReturnValue({
      statusText: "Not Found",
      message: "Page not found",
    });

    render(<ErrorPage />);

    expect(screen.getByRole("heading", { name: /oops/i })).toBeInTheDocument();
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("falls back to the error message when status text is missing", () => {
    useRouteError.mockReturnValue({
      message: "Something broke",
    });

    render(<ErrorPage />);

    expect(screen.getByText("Something broke")).toBeInTheDocument();
  });

  it("renders a fallback message when the route error is missing", () => {
    useRouteError.mockReturnValue(undefined);

    render(<ErrorPage />);

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  });
});
