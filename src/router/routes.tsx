import { RouteObject } from "react-router-dom";

import { Payment } from "./../pages/Payments/Payment";
import { NotFound } from "../pages/NotFound/NotFound";
import { RoutesConstants } from "../constants/routeConstants";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export interface RoutePram extends Record<string, string | undefined> {}

export interface PathRoute extends Omit<RouteObject, "children" | "element"> {
  element?: JSX.Element;
  children?: PathRoute[];
}

export const AUTHENTICATED_ROUTES: PathRoute[] = [
  {
    path: RoutesConstants.HOME,
    element: <Home />,
  },
  {
    path: RoutesConstants.PAYMENTS,
    element: <Payment />,
  },
];

export const UNAUTHENTICATED_ROUTES: PathRoute[] = [
  {
    path: RoutesConstants.LOGIN,
    element: <Login />,
  },
];

export const OPEN_ROUTES: PathRoute[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];
