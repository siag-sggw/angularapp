import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: boolean;
  constructor() {
    this.user = false;
  }

  login() {
    this.user = true;
  }

  logout() {
    this.user = false;
  }
}
