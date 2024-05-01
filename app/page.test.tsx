import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "./page";

vi.mock("./api/auth/");
vi.mock("./api/dream/fetchers");
vi.mock("./api/archetype/fetchers");

test("Home Page", async () => {
    render(<Home />);
    expect(screen.getByText("where untold memories are rediscovered...")).toBeDefined();
});
