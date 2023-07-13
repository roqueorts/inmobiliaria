import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthorizationToken() {
    return 'some-auth-token';
  }
}