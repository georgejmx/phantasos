"use client";

import { assert, expect, test, vi, describe, beforeAll } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import LoginMenu from "./LoginMenu";

vi.mock("../lib/calls");

describe("Login Menu", () => {
    beforeAll(() => {
        render(<LoginMenu />);
        expect(screen.getByText("Sign in")).toBeDefined();
        expect(screen.getByText("Sign up")).toBeDefined();
    });

    test("Successfully handles a user signup", async () => {
        await userEvent.click(screen.getByText("Sign up"));
        expect(
            screen.getByText("Upon registration, you will be redirected to the sign in page")
        ).toBeDefined();

        const emailInput = document.getElementById("email-input");
        const passwordInput = document.getElementById("password-input");
        if (emailInput && passwordInput) {
            await fireEvent.change(emailInput, { target: { value: "hello@example.com" } });
            await fireEvent.change(passwordInput, { target: { value: "a*STRONGpassword" } });
        } else {
            assert.fail();
        }

        await userEvent.click(screen.getByText("Register"));
        expect(screen.queryByText("Please enter an email and password")).toEqual(null);
        expect(screen.queryByText("Client error when creating user")).toEqual(null);
        expect(screen.getByText("Redirecting...")).toBeDefined();
    });
});
