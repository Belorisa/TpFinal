import { Routes } from '@angular/router';
import { SearchPage } from './search-page';
import { CharacterPage } from '../character-page/character-page';

export const SEARCH_ROUTES: Routes = [
    {path: '',component: SearchPage},
    {path: ':id',component: CharacterPage}
]