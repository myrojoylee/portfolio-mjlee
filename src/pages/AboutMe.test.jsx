import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import AboutMe from "./AboutMe";

afterEach(() => {
  cleanup();
});

describe("AboutMe", () => {
  it("renders the about me content and contact link", () => {
    render(<AboutMe />);

    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/Hi, I'm Myro/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /e-mail/i })).toHaveAttribute(
      "href",
      "mailto:myro.joy.olida.092282@gmail.com"
    );
  });

  it("includes a currently reading link", () => {
    render(<AboutMe />);

    const readingParagraph = screen.getByText(/I am currently reading/i)
      .closest("p");

    expect(
      within(readingParagraph).getByRole("link")
    ).toHaveAttribute("target", "_blank");

    expect(
      within(readingParagraph).getByRole("link")
    ).toHaveAttribute("rel", "noreferrer");
  });
});
