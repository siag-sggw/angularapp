import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: boolean;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient,
              private router: Router) {
    this.user = false;
  }

  login(username: string, password: string) {

    this.http.post<any>('https://nodestockapp.herokuapp.com/auth/login',
                        {username, password},
                        this.httpOptions)
      .subscribe( user => {
        this.user = true;
        this.router.navigate(['']);
      });
  }

  logout() {
    this.http.get<any>('https://nodestockapp.herokuapp.com/auth/logout');
    this.user = false;
  }

  register(username: string, password: string) {
    console.log('register');
    this.http.post<any>('https://nodestockapp.herokuapp.com/auth/register',
                        {username, password},
                        this.httpOptions).subscribe( a => console.log(a));
  }
}
