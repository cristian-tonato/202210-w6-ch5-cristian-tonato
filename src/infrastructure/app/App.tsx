
import { AppRoutes } from "../components/routes/app.rputes";
import { Layout } from "../layout/layout";

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
