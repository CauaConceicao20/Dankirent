import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { NgxMaskDirective } from 'ngx-mask';
import { User } from '../../models/user.model';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11)
    ]),
    birthday: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    termsAccepted: new FormControl(false, Validators.requiredTrue)
  });

  public register(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      ModalComponent.open({
        title: 'Formulário inválido',
        message: 'Por favor, corrija os erros antes de continuar.',
        confirmText: 'Ok',
        cancelText: null
      });
      return;
    }

    const formValue = this.form.value;

    const userDataObject: User = {
      id: this.userService.getAll().length + 1 || 1,
      photoUrl: "",
      name: formValue.name!,
      lastName: formValue.lastname!,
      email: formValue.email!,
      phone: formValue.phone!,
      cpf: formValue.cpf!,
      birthday: formValue.birthday!,
      password: formValue.password!,
      registerMoment : ""
    };

    try {
      this.userService.createUser(userDataObject);
      ModalComponent.open({
        title: 'Cadastro realizado',
        message: 'Usuário criado com sucesso. Faça login para continuar.',
        confirmText: 'Ok',
        cancelText: null,
        action: () => {
          this.router.navigate(['/login']);
        }
      });
    } catch (error) {
      ModalComponent.open({
        title: 'Erro',
        message: 'Erro ao criar usuário. Tente novamente.',
        confirmText: 'Ok',
        cancelText: null
      });
    }
  }

  public getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) return `${this.getFieldLabel(fieldName)} é obrigatório`;
    if (control.errors['email']) return 'Email inválido';
    if (control.errors['minlength']) return `Mínimo de ${control.errors['minlength'].requiredLength} caracteres`;
    if (control.errors['maxlength']) return `Máximo de ${control.errors['maxlength'].requiredLength} caracteres`;
    if (control.errors['pattern']) {
      if (fieldName === 'cpf') return 'CPF inválido';
    }
    if (control.errors['requiredTrue']) return 'Você precisa aceitar os termos';
    return '';
  }

  private getFieldLabel(field: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nome',
      lastname: 'Sobrenome',
      email: 'Email',
      phone: 'Telefone',
      cpf: 'CPF',
      birthday: 'Data de nascimento',
      password: 'Senha'
    };
    return labels[field] || field;
  }
}
