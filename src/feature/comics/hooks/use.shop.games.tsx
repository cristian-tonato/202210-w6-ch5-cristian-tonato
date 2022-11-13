import { ShopComics } from "..//..//comics/services/comics.api";
import { Comics } from "../models/comics";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../../infrastructure/store/store";
import * as ac from "../reducer/action.creator.comics";


export const useShopComics = () => {
    const shopComicItems = useSelector((state: rootState) => state.comics);
    const dispatcher = useDispatch();
    const apiShopComics = useMemo(() => new ShopComics(), []);

    useEffect(() => {
        apiShopComics
            .getAll()
            .then((ShopComicItems) => dispatcher(ac.loadActionCreator(ShopComicItems)));
    }, [apiShopComics, dispatcher]);

    const handleAdd = (newShopItem: Comics) => {
        apiShopComics
            .create(newShopItem)
            .then((item: Comics) => dispatcher(ac.addActionCreator(item)));
    };

    const handleDelete = (shopItem: Comics) => {
        apiShopComics
            .delete(shopItem)
            .then(() => dispatcher(ac.deleteActionCreator(shopItem)));
    };

    return {
        shopComicItems,
        handleAdd,
        handleDelete,
    };
};
