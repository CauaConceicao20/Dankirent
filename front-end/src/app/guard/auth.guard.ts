import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if(authService.isUserLoggedIn()) {
    router.navigate(['/explore']);
    return true
  }

  router.navigate(['/login']);
  return false;
};
