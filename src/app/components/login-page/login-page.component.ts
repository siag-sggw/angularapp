import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService
      ) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login();
      this.router.navigate(['']);
    }
  }

}
