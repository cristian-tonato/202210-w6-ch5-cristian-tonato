import { ComicsList } from "..//..//comics/components/comics.list";

import { useShopComics } from "..//..//comics/hooks/use.shop.games";

function ComicsPage() {
    const { shopComicItems } = useShopComics();

    return (
        <main>
            <h2>COMICS</h2>
            <ComicsList item={shopComicItems}></ComicsList>
        </main>
    );
}

export default ComicsPage;
