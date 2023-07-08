import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.routes').then((m) => m.routes)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/home/home.routes').then((m) => m.routes)
  }
];
