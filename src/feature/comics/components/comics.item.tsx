import { Comics } from "..//..//comics/models/comics";

export function ComicItem({ item }: { item: Comics }) {
    return (
        <>
            <p>{item.name}</p>
            <img src={item.imgUrl} alt={"Image of" + item.name} height="200" />
            <p>{item.price}</p>
        </>
    );
}
