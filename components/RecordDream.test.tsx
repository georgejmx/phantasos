"use client";

import { assert, expect, test, vi, describe, beforeAll } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import RecordDream from "./RecordDream";
import { getArchetypes } from "../app/api/archetype/__mocks__/fetchers";

vi.mock("../lib/calls");
vi.mock("./api/dream/fetchers");
vi.mock("./api/archetype/fetchers");

const onCancel = vi.fn();
const onConfirm = vi.fn();
const props = {
    archetypes: getArchetypes(),
    onCancel,
    onConfirm,
};

describe("Record Dream Modal", () => {
    beforeAll(() => {
        render(<RecordDream {...props} />);
        expect(screen.getByText("Record Dream")).toBeDefined();
        expect(screen.getByText("innocent")).toBeDefined();
    });

    test("Correctly attempts to record dreams and handles server errors", async () => {
        const dreamInput = document.getElementById("dream-input");
        if (dreamInput) {
            await fireEvent.change(dreamInput, { target: { value: "a fun dream on a beach" } });
        } else {
            assert.fail();
        }
        expect(screen.getByText("a fun dream on a beach")).toBeDefined();
        await userEvent.click(screen.getByText("ruler"));

        await userEvent.click(screen.getByText("Record"));
        expect(onCancel).not.toHaveBeenCalled();
        expect(onConfirm).not.toHaveBeenCalled();

        expect(screen.getByText("Unable to provide this data")).toBeDefined();
    });
});
