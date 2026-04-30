import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Footer from "./Footer";

afterEach(() => {
  cleanup();
});


describe("Footer", () => {
  it("renders social links", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/myro-joy-lee/"
    );

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/myrojoylee"
    );

    expect(screen.getByRole("link", { name: /codepen/i })).toHaveAttribute(
      "href",
      "https://codepen.io/p2nd2b32r"
    );
  });

  it("renders the updated by text", () => {
    render(<Footer />);

    expect(screen.getByText(/updated/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /myro joy lee/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/myro-joy-lee/"
    );
  });
});
