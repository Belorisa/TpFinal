import { Routes } from '@angular/router';
import { AuthCharacter } from './pages/auth-character/auth-character';

export const routes: Routes = [
    {path: '',redirectTo: '/search',pathMatch: 'full'},
    {path: 'search',loadChildren: () => import('./pages/search-page/search-page.route').then(m => m.SEARCH_ROUTES)},
    {path: 'auth',component:AuthCharacter},
    {path: '**',redirectTo: '/search',pathMatch: 'full'}
];
