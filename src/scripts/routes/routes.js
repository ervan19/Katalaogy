import HomePage from "../view/pages/home-page";
import FavoritePage from "../view/pages/favorite";
import Detail from "../view/pages/detail";

const routes = {
  "/": HomePage,
  "/favorite": FavoritePage,
  "/detail/:id": Detail,
};

export default routes;
