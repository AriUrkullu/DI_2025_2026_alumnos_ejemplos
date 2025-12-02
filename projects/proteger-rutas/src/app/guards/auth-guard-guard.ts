import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';


export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true; // usuario logeado. Acceso PERMITIDO
  } else {
    // Si el usuario NO está logueado, redirige a /home.
    return router.createUrlTree(['/home']); 
  }
};
