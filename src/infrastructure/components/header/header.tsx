import { Menu } from "../menu/menu";
import styles from "./header.module.css";
export function Header() {
    const title = "COMIC´S-GAME";
    return (
        <>
            <header className={styles.header}>
                <h1>{title} </h1>
                <Menu></Menu>
            </header>
        </>
    );
}
