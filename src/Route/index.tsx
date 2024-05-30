import {
  createBrowserRouter,
 } from "react-router-dom";
import App from "../App";
import MoviePage from "../pages/MoviePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/moviepage/:id",
    element: <MoviePage />
  }
]);

