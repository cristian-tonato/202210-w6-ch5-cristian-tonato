import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("..//..//..//feature//pages//home.page"));
//const Mate = lazy(() => import("../../features/mates/page/mate.page"));
//const Dessert = lazy(() => import("../../features/dessert/page/dessert.page"));
const Ofertas = lazy(() => import("../../../feature/pages/ofreta"));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<HomePage />}></Route>
                <Route path="ofertas" element={<Ofertas />}></Route>
                <Route path="" element={<HomePage />}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
