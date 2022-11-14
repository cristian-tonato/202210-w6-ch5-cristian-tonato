import { Games } from "..//models/games";

export class ShopGames {
    update(arg0: { title: string; }) {
        throw new Error('Method not implemented.');
    }
    url: string;
    constructor(url = "https://comicson.onrender.com/Games") {
        this.url = url;
    }

    createError(response: Response) {
        return "error";
    }

    // read / get
    getAll() {
        return fetch(this.url).then((response) => {
            if (response.ok) {
                return response.json();
            }
            return this.createError(response);
        });
    }

    // create / post
    create(shopItem: Games) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(shopItem),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    // delete
    delete(shopItem: Games) {
        return fetch(`${this.url}/${shopItem.id}`, {
            method: "DELETE",
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }
}
