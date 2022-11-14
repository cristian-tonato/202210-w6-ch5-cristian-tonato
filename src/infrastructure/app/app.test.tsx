import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given App component", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            <Router>
                <App />
            </Router>
        );
    });
    test("renders Comics", () => {
        const linkElement = screen.getByText(/Comics/i);
        expect(linkElement).toBeInTheDocument();
    });
});
