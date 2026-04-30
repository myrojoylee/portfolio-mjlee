import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectCard from "./ProjectCard";

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
        render(<ProjectCard card={mockCard}/>);

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
});