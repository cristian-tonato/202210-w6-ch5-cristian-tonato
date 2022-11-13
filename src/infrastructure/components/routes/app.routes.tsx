import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const SalesPage = lazy(() => import("..//..//..//feature/pages/sale.page"));
const GamesPage = lazy(
    () => import("..//..//..//feature//games/page/games.page")
);
const ComicsPage = lazy(
    () => import("..//..//..//feature//comics/page/comic.page")
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="Ofertas" element={<SalesPage />}></Route>
                <Route path="Games" element={<GamesPage />}></Route>
                <Route path="Comics" element={<ComicsPage />}></Route>
                <Route path="" element={<SalesPage />}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
