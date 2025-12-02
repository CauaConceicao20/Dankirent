import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public constructor(private userService: UserService, private router: Router) { }

  public name!: string;
  public lastname!: string;
  public email!: string;
  public phone!: string;
  public cpf!: string;
  public birthday!: string;
  public password!: string;

  public register(): void {
    const userDataObject: User = {
      id: this.userService.getAll().length + 1 || 1,
      name: this.name,
      lastName: this.lastname,
      email: this.email,
      phone: this.phone,
      cpf: this.cpf,
      birthday: this.birthday,
      password: this.password
    };

    if (this.userService.createUser(userDataObject)) {
      this.router.navigate(['/login']);
    }
    else {
      alert("Erro ao criar usuário");
    };
  }
}
