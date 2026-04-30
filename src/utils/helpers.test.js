import { describe, expect, it } from "vitest";
import { validateEmail } from "./helpers";

describe("validateEmail", () => {
    it("returns true for a valid email address", () => {
        expect(validateEmail("myro@example.com")).toBe(true);
    });

    it("returns false for an email without an @ symbol", () => {
        expect(validateEmail("myro.example.com")).toBe(false);
    });

    it("returns false for an email without a domain", () => {
        expect(validateEmail("myro@")).toBe(false);
    });

    it("returns false for an empty string", () => {
        expect(validateEmail("")).toBe(false);
    });
});