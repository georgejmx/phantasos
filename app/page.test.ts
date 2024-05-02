import { expect, test, vi, describe } from "vitest";
import { afterEach, beforeEach } from "node:test"; // for some reason only the node ones work
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

vi.mock("./api/auth");
vi.mock("./api/dream/fetchers");
vi.mock("./api/archetype/fetchers");

describe("Home Page", () => {
    beforeEach(() => {
        expect(screen.getByText('"where untold memories are rediscovered..."')).toBeDefined();
    });

    test("Navigates to the rediscover dream modal with the right data", async () => {
        render(await Home());
        await userEvent.click(screen.getByText("Rediscover Dream"));

        expect(screen.getByText("An illusion from the past..")).toBeDefined();
        expect(screen.getByText("a random mock dream")).toBeDefined();
        expect(screen.getByText(/safety/)).toBeDefined();
    });

    test("Navigates to the record dream modal with the correct archetypes displayed", async () => {
        render(await Home());
        await userEvent.click(screen.getAllByText("Record Dream")[0]);

        expect(screen.getByText("Record")).toBeDefined();
        expect(screen.getByText("Archetype")).toBeDefined();
        expect(screen.getByText("ruler")).toBeDefined();

        await userEvent.click(screen.getByText("Record"));

        expect(screen.getByText(/Please select an archetype to mark your dream.../)).toBeDefined();
    });

    afterEach(async () => {
        await userEvent.click(screen.getByText("Go back"));
        expect(screen.getByText('"where untold memories are rediscovered..."')).toBeDefined();
    });
});
