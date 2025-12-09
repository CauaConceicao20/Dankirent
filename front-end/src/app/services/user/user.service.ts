import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(private storageService: StorageService) { }

  public createUser(userDataObject: any): User {
    const date = new Date();
    const formatDate = new Intl.DateTimeFormat('pt-BR').format(date);

    const user: User = {
      id: userDataObject.id, photoUrl: userDataObject.photoUrl, name: userDataObject.name, lastName: userDataObject.lastName, password: userDataObject.password, email: userDataObject.email,
      phone: userDataObject.phone, birthday: userDataObject.birthday, cpf: userDataObject.cpf, registerMoment: formatDate
    };

    const users = this.getAll();
    users.push(user);

    this.storageService.saveData(users, "registerUser");

    return user;
  }

  public getAll(): User[] {
    const users = this.storageService.getData("registerUser");
    return Array.isArray(users) ? users as User[] : [];
  }

  public getById(id: number): User | null {
    const users = this.getAll();
    return users.find(user => user.id === id) || null;
  }

  public updateUser(user: User): User {
    const users = this.getAll();
    const userIndex = users.findIndex(u => u.id === user.id);

    if (userIndex !== -1) {
      users[userIndex].name = user.name;
      users[userIndex].lastName = user.lastName;
      users[userIndex].phone = user.phone;
      users[userIndex].photoUrl = user.photoUrl;

      this.storageService.saveData(users, "registerUser");
      this.storageService.saveData(users, "loginUser");
      return users[userIndex];
    }

    throw new Error('Usuário não encontrado');
  }
}
