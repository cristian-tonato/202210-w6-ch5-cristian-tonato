import { Games } from "../../games/models/games";
import { GameItem } from "../components/game.item";

export function GameList({ item }: { item: Games[] }) {
    return (
        <div>
            <ul>
                {item.map((item: Games) => (
                    <li key={item.id}>
                        <GameItem item={item}></GameItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
