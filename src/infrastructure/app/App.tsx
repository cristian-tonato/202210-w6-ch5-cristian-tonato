import { AppRoutes } from "..//..//infrastructure/components/routes/app.routes";
import { Layout } from "../layout/layout";
import "./app.css";


function App() {
    return (
        <>
            <div className="App">
                <Layout>
                    <AppRoutes></AppRoutes>
                </Layout>
            </div>
        </>
    );
}
export default App;
