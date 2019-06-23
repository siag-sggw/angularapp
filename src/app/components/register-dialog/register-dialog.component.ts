import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  email: string;
  password: string;
  repeatPassword: string;

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onRegister() {
    if (this.password === this.repeatPassword) {
      this.authService.register(this.email, this.password);
    }
    this.closeDialog();
   }

  closeDialog() {
    this.dialogRef.close();
  }

}
