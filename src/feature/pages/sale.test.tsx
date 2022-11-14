import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import SalesPage from "./sale.page";

describe("Given Sale component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router>
                    <SalesPage />
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/sales/i);
            expect(element).toBeInTheDocument();
        });
    });
});
