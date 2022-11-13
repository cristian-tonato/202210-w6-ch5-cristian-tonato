import { ShopGames } from "../services/games.api";
import { Games } from "../models/games";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../../infrastructure/store/store";
import * as ac from "../reducer/action.creator";

export const useShopGames = () => {
    const shopItems = useSelector((state: rootState) => state.games);
    const dispatcher = useDispatch();
    const apiShop = useMemo(() => new ShopGames(), []);

    useEffect(() => {
        apiShop
            .getAll()
            .then((shopItems) => dispatcher(ac.loadActionCreator(shopItems)));
    }, [apiShop, dispatcher]);

    const handleAdd = (newShopItem: Games) => {
        apiShop
            .create(newShopItem)
            .then((item: Games) => dispatcher(ac.addActionCreator(item)));
    };

    const handleDelete = (shopItem: Games) => {
        apiShop
            .delete(shopItem)
            .then(() => dispatcher(ac.deleteActionCreator(shopItem)));
    };

    return {
        shopItems,
        handleAdd,
        handleDelete,
    };
};
