import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./shared/components/layout/layout').then((m) => m.Layout),
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./business/dashboard/dashboard').then((m) => m.Dashboard),
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import('./business/profile/profile').then((m) => m.Profile),
            },
            {
                path: 'tables',
                loadComponent: () =>
                    import('./business/tables/tables').then((m) => m.Tables),
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    },
];
