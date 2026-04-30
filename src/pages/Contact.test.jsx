import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
    it("renders contact options and email link", () => {
        render(<Contact />);

        expect(screen.getByText(/talk about a project idea/i)).toBeInTheDocument();
        expect(screen.getByText(/discuss an existing project/i)).toBeInTheDocument();
        expect(screen.getByText(/just say hi/i)).toBeInTheDocument();

        expect(screen.getByRole("link", { name: /e-mail/i })).toHaveAttribute(
            "href",
            "mailto:myro.joy.olida.092282@gmail.com"
        );
    });
});