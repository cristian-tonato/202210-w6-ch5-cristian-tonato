import { Games } from "../models/games";

export function GameItem({ item }: { item: Games }) {
    return (
        <>
            <p>{item.name}</p>
            <img src={item.imgUrl} alt={"Image of" + item.name} height="200" />
            <p>{item.price}</p>
        </>
    );
}
