import { Route } from "react-router-dom"
import { PathRoute } from "./routes"

export const RecursiveRouteMapper = (routes: PathRoute[]) => {
  return routes.map((route, index) => (
    <Route key={route.path ?? index} {...(route as any)}>
      {route.children ? RecursiveRouteMapper(route.children) : undefined}
    </Route>
  ))
}
