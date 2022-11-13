import { GameList } from "../components/game.list";

import { useShopGames } from "../hooks/use.shop.games";

function GamesPage() {
    const {shopItems} = useShopGames();

    return (
        <main>
            <h2>GAMES</h2>
            <GameList item={shopItems}></GameList>
        </main>
    );
}

export default GamesPage;
