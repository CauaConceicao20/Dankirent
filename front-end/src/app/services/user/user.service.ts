import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(private storageService: StorageService) { }

  public createUser(userDataObject: any): User {
    const user: User = {
      id: userDataObject.id, name: userDataObject.name, lastName: userDataObject.lastName, password: userDataObject.password, email: userDataObject.email,
      phone: userDataObject.phone, birthday: userDataObject.birthday, cpf: userDataObject.cpf
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
}
