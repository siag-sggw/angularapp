import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, NgForm } from '@angular/forms';

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
    public dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit() {
  }

  onRegister() { }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('submit');
    this.dialogRef.close();
  }

}
