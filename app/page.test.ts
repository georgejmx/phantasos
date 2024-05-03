import { expect, test, vi, describe, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

vi.mock("./api/auth");
vi.mock("./api/dream/fetchers");
vi.mock("./api/archetype/fetchers");

describe("Home Page", () => {
    test("Navigates to the rediscover dream modal with a random dream displayed", async () => {
        render(await Home());
        expect(screen.getByText('"where untold memories are rediscovered..."')).toBeDefined();
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

    afterAll(async () => {
        await userEvent.click(screen.getByText("Go back"));
        expect(screen.queryAllByText("Phantasos")).toHaveLength(2);
    });
});
