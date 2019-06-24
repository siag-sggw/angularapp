import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient,
              private router: Router) {
    this.user = null;
  }

  login(username: string, password: string) {

    this.http.post<any>('https://nodestockapp.herokuapp.com/auth/login',
                        {username, password},
                        this.httpOptions)
      .subscribe( res => {
        this.user = new User(res.username);
        this.router.navigate(['']);
      });
  }

  logout() {
    this.http.get<any>('https://nodestockapp.herokuapp.com/auth/logout');
    this.user = null;
  }

  register(username: string, password: string) {
    console.log('register');
    this.http.post<any>('https://nodestockapp.herokuapp.com/auth/register',
                        {username, password},
                        this.httpOptions).subscribe( a => console.log(a));
  }
}
