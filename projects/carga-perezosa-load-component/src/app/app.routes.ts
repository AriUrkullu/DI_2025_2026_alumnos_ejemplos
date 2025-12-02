import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Lazy } from './lazy/lazy';
import { Eager } from './eager/eager';

export const routes: Routes = [
    {
        path: '', component: Home,
    },
    {
        path: 'lazy', loadComponent: () => import('./lazy/lazy').then(m => m.Lazy),
    },
    {
        path: 'eager', component: Eager,
    },
];