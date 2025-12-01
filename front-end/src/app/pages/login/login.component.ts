import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public login!: string;
  public password!: string;

  public constructor(private authService: AuthenticationService,
    private router: Router) { }

  public authentication(): void {
    if (this.authService.login(this.login, this.password)) {
      this.router.navigate(['/home']);
    }
    else {
      console.error("Erro ao autenticar:");
      alert("Dados incorretos ou invalidos");
    }
  }
}
