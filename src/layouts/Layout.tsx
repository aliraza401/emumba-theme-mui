import React from "react";
import {
  matchRoutes,
  Navigate,
  RouteObject,
  useLocation,
} from "react-router-dom";
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from "../router/routes";
import { LayoutProps } from "./Layout.interfaces";
import { RoutesConstants } from "../constants/routeConstants";
import { Main, StyledRoot } from "./layout.styled";
import { Header } from "../components/Header/Header";
import useScrollToTop from "../hooks/useScrollToTop";
import Nav from "../components/Nav/Nav";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  useScrollToTop();

  const isAuthenticated = true;

  const authenticated_route = !!matchRoutes(
    AUTHENTICATED_ROUTES as RouteObject[],
    pathname
  )?.length;

  const unauthenticated_route = !!matchRoutes(
    UNAUTHENTICATED_ROUTES as RouteObject[],
    pathname
  )?.length;

  if (!isAuthenticated && authenticated_route)
    return <Navigate to={RoutesConstants.LOGIN} />;
  if (isAuthenticated && unauthenticated_route)
    return <Navigate to={RoutesConstants.HOME} replace />;

  return (
    <StyledRoot>
      <Header />
      <Nav />
      <Main>{children(isAuthenticated)}</Main>
    </StyledRoot>
  );
};
