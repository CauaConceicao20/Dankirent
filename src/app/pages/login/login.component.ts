import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';

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
      ModalComponent.open({
        title: 'Formulário inválido',
        message: 'Por favor, preencha os campos corretamente antes de continuar.',
        confirmText: 'Ok',
        cancelText: null
      });
      return;
    }

    const loginValue = this.loginForm.value;

    this.authService.login(loginValue.email!, loginValue.password!).subscribe({
      next: (value) => {
          this.router.navigate(['/explore']);
      },
      error(err) {
       console.log("problema com login", err); 
           ModalComponent.open({
        title: 'Erro de autenticação',
        message: 'Email ou senha incorretos. Verifique e tente novamente.',
        confirmText: 'Ok',
        cancelText: null
      });
      }
    })
    /*
    if (this.authService.login(loginValue.email!, loginValue.password!)) {
    
    }
    else {
      console.error('Erro ao autenticar:');
  
    }
      */
  }

  public getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) return `${this.getFieldLabel(fieldName)} é obrigatório`;
    if (control.errors['email']) return 'Email inválido';
    if (control.errors['minlength']) return `Mínimo de ${control.errors['minlength'].requiredLength} caracteres`;
    return '';
  }

  private getFieldLabel(field: string): string {
    const labels: { [key: string]: string } = {
      email: 'Email',
      password: 'Senha'
    };
    return labels[field] || field;
  }
}

