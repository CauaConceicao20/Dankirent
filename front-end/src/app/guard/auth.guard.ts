import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isLogged()) {
    return true;
  }

  alert("Você precisa estar logado para acessar essa página");
  router.navigate(['/login']);
  return false;
};
