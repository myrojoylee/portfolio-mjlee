import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

afterEach(() => {
    cleanup();
});

describe("Navigation", () => {
    it("renders the main navigation links", () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: /about me/i})).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /portfolio/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    });

    it("marks the portfolio link as active when on the portfolio route", () => {
        render(
            <MemoryRouter initialEntries={["/portfolio"]}>
                <Navigation />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: /portfolio/i })).toHaveClass(
            "active"
        );
    });
});