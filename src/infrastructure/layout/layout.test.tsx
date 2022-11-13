import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./layout";

describe("Given Layout component", () => {
    describe("When we render the component", () => {
        test("Then it should display Bayonetta 3", () => {
            render(
                <Router>
                    <Layout>
                        <p>Bayoneta 3</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Bayoneta/i);
            expect(element).toBeInTheDocument();
        });
    });
});
