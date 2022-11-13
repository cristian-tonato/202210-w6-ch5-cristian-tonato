import { ShopArticules } from "../../infrastructure/services/articule.api";
import { Articules } from "../models/articules";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../infrastructure/store/store";
import * as ac from "../reducer/action.creator";

export const useShopArticules = () => {
    const shopItems = useSelector((state: rootState) => state.articules);
    const dispatcher = useDispatch();
    const apiShop = useMemo(() => new ShopArticules(), []);

    useEffect(() => {
        apiShop
            .getAll()
            .then((shopItems) => dispatcher(ac.loadActionCreator(shopItems)));
    }, [apiShop, dispatcher]);

    const handleAdd = (newShopItem: Articules) => {
        apiShop
            .create(newShopItem)
            .then((item: Articules) => dispatcher(ac.addActionCreator(item)));
    };

    const handleDelete = (shopItem: Articules) => {
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
