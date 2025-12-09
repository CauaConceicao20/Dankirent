import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { NgxMaskDirective } from 'ngx-mask';
import { User } from '../../models/user.model';

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
      return;
    }

    const formValue = this.form.value;

    const userDataObject: User = {
      id: this.userService.getAll().length + 1 || 1,
      name: formValue.name!,
      lastName: formValue.lastname!,
      email: formValue.email!,
      phone: formValue.phone!,
      cpf: formValue.cpf!,
      birthday: formValue.birthday!,
      password: formValue.password!,
      registerMoment : ""
    };

    if (this.userService.createUser(userDataObject)) {
      this.router.navigate(['/login']);
    } else {
      alert("Erro ao criar usuário");
    }
  }
}
