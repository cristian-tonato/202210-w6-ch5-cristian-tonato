import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "..//routes/app.routes";

describe("Given AppRoutes component", () => {
    describe("When we render the component And the route is home", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router initialEntries={["/", "/home", "/Games","/Comics"]} initialIndex={0}>
                    <AppRoutes />
                </Router>
            );
        });
        test("Then it should display the home", () => {
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
