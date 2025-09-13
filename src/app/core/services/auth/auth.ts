import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly _router = inject(Router);  

  login(username: string, password: string) {
    localStorage.setItem('username', JSON.stringify({username, password}));
  }

  logout() {
    localStorage.removeItem('username');
  }

  isAuthenticated() {
    return localStorage.getItem('username') !== null;
  }
}
