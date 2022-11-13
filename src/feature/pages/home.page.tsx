import { GameList } from "../games/components/game.list";
import { useShopGames } from "../games/hooks/use.shop.games";

function HomePage() {
    const { shopItems } = useShopGames();
    return (
        <main>
            <h2>Inicio</h2>
            <GameList item={shopItems}></GameList>
        </main>
    );
}

export default HomePage;
