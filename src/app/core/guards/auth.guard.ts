import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth/auth';

export const AuthGuard: CanActivateFn = (route, state) => {
  const _auth = inject(Auth);
  const _router = inject(Router);

  if(_auth.isAuthenticated()) {
    return true;
  } else {
    _router.navigate(['/login']);
    return false;
  }
};

export const NoAuthGuard: CanActivateFn = (route, state) => {
  const _auth = inject(Auth);
  const _router = inject(Router);

  if(!_auth.isAuthenticated()) {
    return true;
  } else {
    _router.navigate(['/home']);
    return false;
  }
};