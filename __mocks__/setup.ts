import { beforeAll, vi } from "vitest";

beforeAll(() => {
    vi.mock("next/navigation", () => require("next-router-mock"));
    vi.mock('next-auth/react', () => ({
        signIn: vi.fn(),
        signUp: vi.fn(),
    }));
});
