import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "./page";

vi.mock("./api/auth/");
vi.mock("./api/dream/fetchers");
vi.mock("./api/archetype/fetchers");

test("Home Page", async () => {
    render(await Home());
    expect(screen.getByText('"where untold memories are rediscovered..."')).toBeDefined();

    await userEvent.click(screen.getByText("Rediscover Dream"));

    expect(screen.getByText("An illusion from the past..")).toBeDefined();
    expect(screen.getByText("a random mock dream")).toBeDefined();
    expect(screen.getByText(/safety/)).toBeDefined();
});
