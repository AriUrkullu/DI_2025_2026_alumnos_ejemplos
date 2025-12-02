import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Private } from './private/private';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
    { path: 'home', component: Home },
    {
    path: 'private',
    component: Private,  // Obligatorio
    canActivate: [authGuardGuard] // Guard
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
