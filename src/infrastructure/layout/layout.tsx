import { Footer } from "../components//footer/footer";
import { Header } from "../components/header/header";

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>

            {children}
            <Footer></Footer>
        </>
    );
}
