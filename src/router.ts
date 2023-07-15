import { RootRoute, Route, Router, RouterProvider, lazy } from '@tanstack/router'
import DefaultRoot from './components/router/DefaultRoot'
import NotFound from './components/router/NotFound'

const rootRoute = new RootRoute({
  component: DefaultRoot
})

const modules = import.meta.glob('./pages/**/*.tsx')
const routes = []

console.log('Modules', modules)

for (const path in modules) {
  let [pagePath] = path.substring(8, path.length).split('.')
  let pageName = pagePath.substring( pagePath.indexOf('/', -1)+1, pagePath.length )

  // console.log('pageName', pageName);

  // Skip pages with underscore prefix
  if (pageName.includes('_')) continue

  // console.log('pagePath', pagePath);

  pagePath = pagePath.replace('index', '') // Removes the index pathname
  let routePath = ('/' + pagePath);

  console.log({ pageName, pagePath, routePath });

  routes.push(
    new Route({
      getParentRoute: () => rootRoute,
      path: routePath,
      // @ts-ignore
      component: lazy(/* @vite-ignore */ modules[path]),
    })
  );
}

// Register the 404 page.
routes.push(
  new Route({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFound,
  })
);

const routeTree = rootRoute.addChildren(routes)

const router = new Router({ routeTree })

export default router;

export { RouterProvider }
