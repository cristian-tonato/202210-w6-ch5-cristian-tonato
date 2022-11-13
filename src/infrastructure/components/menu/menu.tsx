import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export function Menu() {
    const options = [
        { id: "1", path: "Ofertas", label: "Ofertas" },
        { id: "2", path: "Games", label: "Games" },
        { id: "3", path: "Comics", label: "Comics" },
    ];
    return (
        <nav>
            <ul className={styles.menu__ul}>
                {options.map((item) => (
                    <li key={item.id} className={styles.menu__list}>
                        <Link to={item.path} className={styles.menu__nav}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
