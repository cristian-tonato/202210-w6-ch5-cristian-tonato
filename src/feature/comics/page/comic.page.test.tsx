import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ComicsPage from "./comic.page";


describe("Given ComicsPage component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router>
                    <ComicsPage />
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Comics/i);
            expect(element).toBeInTheDocument();
        });
    });
});
