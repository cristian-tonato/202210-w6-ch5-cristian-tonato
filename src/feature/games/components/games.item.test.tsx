import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../src/infrastructure/store/store";
import { useShopGames } from "../../games/hooks/use.shop.games";
import { Games } from "../../games/models/games";
import { GameItem } from "./game.item";


jest.mock("../../games/hooks/use.shop.games");


describe("Given GamesItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const GamesMock: Games = {
                id: 1,
                name: "God of War: Ragnarok",
                platform: "",
                price: "",
                imgUrl: "",
                ofert: false,
                detail: ""
            };

            (useShopGames as jest.Mock).mockReturnValue({
                products: [GamesMock],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <GameItem item={GamesMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/God/i);
            expect(element).toBeInTheDocument();
        });
    });
});
