import { Comics } from "..//..//comics/models/comics";
import { ComicItem } from "..//..//comics/components/comics.item";

export function ComicsList({ item }: { item: Comics[] }) {
    return (
        <div>
            <ul>
                {item.map((item: Comics) => (
                    <li key={item.id}>
                        <ComicItem item={item}></ComicItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
