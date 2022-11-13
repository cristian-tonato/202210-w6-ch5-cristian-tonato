import { GameList } from "../games/components/game.list";
import { useShopGames } from "../games/hooks/use.shop.games";

function SalesPage() {
    const { shopItems } = useShopGames();
    return (
        <main>
            <h2>SALES</h2>
            <GameList item={shopItems}></GameList>
        </main>
    );
}

export default SalesPage;
