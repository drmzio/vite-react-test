import { RootRoute, Route, Router, RouterProvider, lazy } from '@tanstack/router'
import DefaultRoot from './components/DefaultRoot'

const rootRoute = new RootRoute({
  component: DefaultRoot
})

const modules = import.meta.glob('./pages/**/*.tsx');
console.log('modules', modules);

let pages = [];

for (const path in modules) {
  let [page] = path.substring(8, path.length).split('.');

  // Skip pages with underscore prefix
  if (page.substring(0, 1) === '_') continue;

  page = page.replace('index', '');
  let pagePath = ('/' + page);

  console.log('pagePath', pagePath);

  pages.push(
    new Route({
      getParentRoute: () => rootRoute,
      path: pagePath,
      // @ts-ignore
      component: lazy(/* @vite-ignore */ modules[path]),
    })
  );
}

console.log(pages);
console.log(Object.keys(modules))

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

console.log('pages', pages);

const routeTree = rootRoute.addChildren(pages)

const router = new Router({ routeTree })

export default router;

export { RouterProvider }
