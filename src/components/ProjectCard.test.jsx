import { act } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProjectCard from "./ProjectCard";

afterEach(() => {
    cleanup();
    vi.useRealTimers();
});

const mockCard = {
    front: "/test-image.png",
    back: {
        title: "Test Project",
        description: "A project used for testing",
        technologies: "React, Vitest",
    },
    link: "https://example.com",
    repo: "https://github.com/example/repo",
};

describe("ProjectCard", () => {
    it("renders the project details and links", () => {
        render(<ProjectCard card={mockCard} />);

        expect(screen.getByText("Title: Test Project")).toBeInTheDocument();
        expect(screen.getByText("Details: A project used for testing")).toBeInTheDocument();
        expect(screen.getByText("Technologies: React, Vitest")).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: /link to deployed app/i })
        ).toHaveAttribute("href", "https://example.com");

        expect(
            screen.getByRole("link", { name: /link to github repo/i })).toHaveAttribute("href", "https://github.com/example/repo");
    });

    it("flips the card when clicked", () => {
        const { container } = render(<ProjectCard card={mockCard} />);
        const card = container.querySelector(".game-card");

        expect(card).not.toHaveClass("is-flipped");

        fireEvent.click(card);

        expect(card).toHaveClass("is-flipped");
    });

    it("does not flip the card when a project link is clicked", () => {
        const { container } = render(<ProjectCard card={mockCard} />);
        const card = container.querySelector(".game-card");

        fireEvent.click(screen.getByRole("link", { name: /link to deployed app/i }));

        expect(card).not.toHaveClass("is-flipped");
    });

    it("hides the front face after flipping and shows it again when flipped back", () => {
        vi.useFakeTimers();

        const { container } = render(<ProjectCard card={mockCard} />);
        const card = container.querySelector(".game-card");
        const frontFace = container.querySelector(".card-front");

        fireEvent.click(card);

        expect(card).toHaveClass("is-flipped");

        act(() => {
            vi.advanceTimersByTime(700);
        });

        expect(frontFace).toHaveStyle({ display: "none" });

        fireEvent.click(card);

        expect(card).not.toHaveClass("is-flipped");
        expect(frontFace).toHaveStyle({ display: "block" });
    });

});