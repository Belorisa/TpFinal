import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',redirectTo: '/search',pathMatch: 'full'},
    {path: 'search',loadChildren: () => import('./pages/search-page/search-page.route').then(m => m.SEARCH_ROUTES)},
];
