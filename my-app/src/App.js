import Home from "./pages/Home";
import Layout from "./layout/Layout";
import LayoutNoNav from "./layout/LayoutNoNav";
import MovieDetails from "./pages/MovieDetails";
import ErrorPage from "./components/ErrorPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<LayoutNoNav />} errorElement={<ErrorPage />}>
          <Route path=":id" element={<MovieDetails />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}

export default App;
