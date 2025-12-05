import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  public constructor(private authService: AuthenticationService,
    private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  public authentication(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginValue = this.loginForm.value;
    if (this.authService.login(loginValue.email!, loginValue.password!)) {
      this.router.navigate(['/explore']);
    }
    else {
      console.error("Erro ao autenticar:");
      alert("Dados incorretos ou invalidos");
    }
  }
}

