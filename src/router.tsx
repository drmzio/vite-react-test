import { RootRoute, Route, Router, RouterProvider, lazy } from '@tanstack/router'
import DefaultRoot from './components/router/DefaultRoot'
import NotFound from './components/router/NotFound'

const rootRoute = new RootRoute({
  component: DefaultRoot
})

const modules = import.meta.glob('./pages/**/*.tsx');
const routes = [];

for (const path in modules) {
  let [page] = path.substring(8, path.length).split('.');

  // Skip pages with underscore prefix
  if (page.substring(0, 1) === '_') continue;

  page = page.replace('index', '');
  let pagePath = ('/' + page);

  routes.push(
    new Route({
      getParentRoute: () => rootRoute,
      path: pagePath,
      // @ts-ignore
      component: lazy(/* @vite-ignore */ modules[path]),
    })
  );
}

routes.push(
  new Route({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFound,
  })
);

// for (const path in modules) {
//   let [page, ext] = path.substring(7, path.length).split('.');

//   if (page === '/_layout') {
//     rootRoute = await import(path);
//   } else {
//     rootRoute = DefaultRoot;
//   }

//   console.log('rootRoute', rootRoute)
//   console.log({ path, page, ext });
// }

console.log('ROUTES', routes);

const routeTree = rootRoute.addChildren(routes)

const router = new Router({ routeTree })

export default router;

export { RouterProvider }
