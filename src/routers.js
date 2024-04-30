import AdminPanel from "./pages/AdminPanel";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  MENU_ROUTE,
} from "./utils/consts.js";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ItemPage from "./pages/ItemPage";
import Menu from "./components/Menu/Menu.jsx";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <AdminPanel></AdminPanel>,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket></Basket>,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop></Shop>,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth></Auth>,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth></Auth>,
  },
  {
    path: ITEM_ROUTE + "/:id",
    Component: <ItemPage></ItemPage>,
  },
  {
    path: MENU_ROUTE,
    Component: <Menu></Menu>,
  },
];
