import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Archetypes from "./page";

vi.mock("../api/auth");
vi.mock("../api/dream/fetchers");
vi.mock("../api/archetype/fetchers");

test("Archetype Page", async () => {
    render(await Archetypes());
    expect(screen.getByText(/One does not become enlightened by imagining figures/)).toBeDefined();

    expect(screen.getByText("The Innocent")).toBeDefined();
    expect(screen.getByText("The innocent seeks to maintain their childlike wonder")).toBeDefined();
    expect(screen.getByText(/safety/)).toBeDefined();
    expect(screen.getByText(/ego/)).toBeDefined();

    expect(screen.queryAllByAltText(/image thumbnail/)).toHaveLength(2);
    expect(screen.queryAllByText(/1/)).toHaveLength(1);
});
